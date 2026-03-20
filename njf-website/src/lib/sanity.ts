import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const sanityClient = createClient({
  projectId: '1zx880ik',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: any) {
  return builder.image(source);
}

export async function sanityFetch<T = any>(query: string, params?: Record<string, any>): Promise<T> {
  return sanityClient.fetch<T>(query, params ?? {});
}

/**
 * Convert Sanity portable text blocks to simple HTML paragraphs.
 * Handles basic block types with spans (bold, italic, links).
 */
export function toHtml(blocks: any[]): string {
  if (!blocks || !Array.isArray(blocks)) return '';
  return blocks
    .filter((b) => b._type === 'block')
    .map((b) => {
      const text = (b.children || [])
        .map((child: any) => {
          let t = child.text || '';
          if (child.marks?.includes('strong')) t = `<strong>${t}</strong>`;
          if (child.marks?.includes('em')) t = `<em>${t}</em>`;
          return t;
        })
        .join('');
      const tag = b.style === 'h2' ? 'h2' : b.style === 'h3' ? 'h3' : b.style === 'h4' ? 'h4' : 'p';
      return `<${tag}>${text}</${tag}>`;
    })
    .join('\n');
}
