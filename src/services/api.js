export async function getCategories() {
  const fetchAPI = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await fetchAPI.json();
  // console.log(categories);
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  if (!categoryId) {
    const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const result = await categories.json();
    return result;
  }
  if (!query) {
    const categories = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
    const result = await categories.json();
    return result;
  }
  const getFetch = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query}`);
  const getProducts = await getFetch.json();
  return getProducts;
}
