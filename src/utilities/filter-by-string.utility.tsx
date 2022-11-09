const filterByString = (list: any, searchKey: string) => {
  return list
    .filter((product: any) => {
      if (product.name.toLocaleLowerCase().includes(searchKey.toLowerCase())) {
        return product;
      }
    })
    .slice(0, 7);
};

export default filterByString;
