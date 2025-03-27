export interface Item {
  id: string;
  data: {
    categories: string[];
    tags: string[];
  };
}

const similarItems = (currentItem: Item, allItems: Item[]): Item[] => {
  let categories: string[] = [];
  let tags: string[] = [];

  // set categories
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }

  // set tags
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }

  // filter by categories
  const filterByCategories = allItems.filter((item) =>
    categories.some((category) => item.data.categories.includes(category)),
  );

  // filter by tags
  const filterByTags = allItems.filter((item) =>
    tags.some((tag) => item.data.tags.includes(tag)),
  );

  // merged after filter
  const mergedItems = [...new Set([...filterByCategories, ...filterByTags])];

  // filter by slug
  return mergedItems.filter((product) => product.id !== currentItem.id);
};

export default similarItems;
