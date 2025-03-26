import { slugify } from "@/lib/utils/textConverter";
import { getSinglePage } from "./contentParser";

interface PageData {
  data: Record<string, string[]>;
}

/**
 * Extracts taxonomy values from a collection of pages
 * @param collection The collection to process
 * @param name The taxonomy field name
 * @param unique Whether to return only unique values (default: true)
 * @returns Array of slugified taxonomy values
 */
export const getTaxonomy = async (
  collection: string,
  name: string,
  unique: boolean = true,
): Promise<string[]> => {
  const singlePages: PageData[] = await getSinglePage(collection);

  const taxonomies = singlePages.flatMap(
    (page) => page.data[name]?.map(slugify) ?? [],
  );

  return unique ? [...new Set(taxonomies)] : taxonomies;
};

/**
 * Gets all taxonomy values (including duplicates) from frontmatter
 * This is just a convenience wrapper for getTaxonomy with unique=false
 */
export const getAllTaxonomy = async (
  collection: string,
  name: string,
): Promise<string[]> => {
  return getTaxonomy(collection, name, false);
};
