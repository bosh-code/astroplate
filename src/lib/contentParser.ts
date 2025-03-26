import {
  type CollectionEntry,
  type CollectionKey,
  getCollection
} from "astro:content";

/**
 * Retrieves published pages from a collection, filtering out drafts and index pages.
 * @param collectionName The name of the collection to fetch
 * @returns Array of collection entries that are published and not index pages
 */
export const getSinglePage = async <C extends CollectionKey>(
  collectionName: C,
): Promise<CollectionEntry<C>[]> => {
  const allPages = await getCollection(collectionName);

  return allPages.filter(
    (entry) => !entry.data.draft && !entry.id.startsWith("-"),
  );
};
