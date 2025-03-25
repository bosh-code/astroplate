import type { CollectionEntry } from "astro:content";

export const sortByDate = <C extends string>(array: CollectionEntry<C>[]) =>
  array.sort(
    (a, b) => new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
  );
