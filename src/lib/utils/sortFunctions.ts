// sort by date
export const sortByDate = (array: any[]) => {
  return array.sort(
    (a: any, b: any) =>
      new Date(b.data.date && b.data.date).valueOf() -
      new Date(a.data.date && a.data.date).valueOf(),
  );
};
