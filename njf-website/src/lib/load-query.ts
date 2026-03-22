import { type QueryParams } from 'sanity';
import { sanityClient } from 'sanity:client';

const visualEditingEnabled =
  import.meta.env.PUBLIC_SANITY_VISUAL_EDITING_ENABLED === 'true';
const token = import.meta.env.SANITY_API_READ_TOKEN;

/**
 * Fetch data from Sanity with visual-editing awareness.
 *
 * When visual editing is enabled:
 *  - Uses the "drafts" perspective so editors see unpublished changes
 *  - Returns content source maps for click-to-edit overlays
 *  - Encodes stega strings into field values
 *  - Authenticates with a read token (required for draft access)
 *
 * When visual editing is off (production):
 *  - Uses "published" perspective + CDN for fast responses
 *  - No stega encoding, no source maps
 */
export async function loadQuery<QueryResponse>({
  query,
  params,
}: {
  query: string;
  params?: QueryParams;
}) {
  if (visualEditingEnabled && !token) {
    throw new Error(
      'The `SANITY_API_READ_TOKEN` environment variable is required during Visual Editing.',
    );
  }

  const perspective = visualEditingEnabled ? 'drafts' : 'published';

  const { result, resultSourceMap } = await sanityClient.fetch<QueryResponse>(
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

  return {
    data: result,
    sourceMap: resultSourceMap,
    perspective,
  };
}
