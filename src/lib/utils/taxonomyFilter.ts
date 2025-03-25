import { slugify } from "@/lib/utils/textConverter";

// Generic type for a post with taxonomies
type PostWithTaxonomies<T = Record<string, unknown>> = {
  data: T & {
    [taxonomyName: string]: string[];
  };
};

const taxonomyFilter = <T extends PostWithTaxonomies>(
  posts: T[],
  name: string,
  key: string,
): T[] =>
  posts.filter((post) =>
    post.data[name]
      .map((taxonomy: string) => slugify(taxonomy))
      .includes(slugify(key)),
  );

export default taxonomyFilter;
