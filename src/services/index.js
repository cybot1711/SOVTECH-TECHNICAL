const urlCategories = 'https://api.chucknorris.io/jokes/categories';
const urlCategory = 'https://api.chucknorris.io/jokes/random?category=';

export const getCategories = async () => {
  try {
    const data = await fetch(urlCategories);
    return data.json();
  } catch (error) {
    return error;
  }
};

export const getCategory = async (category) => {
  try {
    const data = await fetch(`${urlCategory}${category}`);
    return data.json();
  } catch (error) {
    return error;
  }
};
