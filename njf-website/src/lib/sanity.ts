import { sanityClient } from 'sanity:client';
import imageUrlBuilder from '@sanity/image-url';

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true';
const token = import.meta.env.SANITY_API_READ_TOKEN;

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source).auto('format').quality(80);
}

export async function sanityFetch<T = any>(query: string, params?: Record<string, any>): Promise<T> {
  if (visualEditingEnabled && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.',
    );
  }

  const perspective = visualEditingEnabled ? 'drafts' : 'published';

  const { result } = await sanityClient.fetch<T>(
    query,
    params ?? {},
    {
      filterResponse: false,
      perspective,
      resultSourceMap: visualEditingEnabled ? 'withKeyArraySelector' : false,
      stega: visualEditingEnabled,
      ...(visualEditingEnabled ? { token } : {}),
      useCdn: !visualEditingEnabled,
    },
  );

  return result;
}

/**
 * Convert a video URL (YouTube or Vimeo) to an embeddable iframe URL.
 */
function getEmbedUrl(url: string): string | null {
  if (!url) return null;

  // YouTube: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
  const ytMatch = url.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) return `https://www.youtube.com/embed/${ytMatch[1]}`;

  // Vimeo: vimeo.com/ID
  const vimeoMatch = url.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) return `https://player.vimeo.com/video/${vimeoMatch[1]}`;

  return null;
}

/**
 * Convert Sanity portable text blocks to simple HTML paragraphs.
 * Handles basic block types with spans (bold, italic, links),
 * and custom videoEmbed blocks.
 */
export function toHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .map((b) => {
      // Handle video embed blocks
      if (b._type === 'videoEmbed') {
        const embedUrl = getEmbedUrl(b.url);
        if (!embedUrl) return '';
        const caption = b.caption
          ? `<p class="video-caption">${b.caption}</p>`
          : '';
        return `<div class="video-embed"><iframe src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy" title="${b.caption || 'Embedded video'}"></iframe>${caption}</div>`;
      }

      // Skip non-block types we don't handle
      if (b._type !== 'block') return '';

      const rawText = (b.children || [])
        .map((child: any) => {
          // Convert soft line breaks (\n) to <br> tags
          let t = (child.text || '').replace(/\n/g, '<br>');
          if (child.marks?.includes('strong')) t = `<strong>${t}</strong>`;
          if (child.marks?.includes('em')) t = `<em>${t}</em>`;
          return t;
        })
        .join('');

      // Empty block = blank line spacer — render as non-breaking space paragraph
      if (!rawText.trim()) return '<p>&nbsp;</p>';

      const tag = b.style === 'h2' ? 'h2' : b.style === 'h3' ? 'h3' : b.style === 'h4' ? 'h4' : 'p';
      return `<${tag}>${rawText}</${tag}>`;
    })
    .join('\n');
}
