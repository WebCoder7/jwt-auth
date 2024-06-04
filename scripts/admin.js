

document.addEventListener('DOMContentLoaded', () => {
  const products = [];

  const titleInput = document.getElementById('title');
  const priceInput = document.getElementById('price');
  const descriptionInput = document.getElementById('description');
  const addButton = document.getElementById('add-button');
  const productsList = document.getElementById('products-list');

  addButton.addEventListener('click', () => {
      const title = titleInput.value;
      const price = parseFloat(priceInput.value);
      const description = descriptionInput.value;

      if (title && !isNaN(price) && description) {
          const newProduct = {
              id: Date.now(),
              title,
              price,
              description
          };

          products.push(newProduct);
          displayProducts();
          
          titleInput.value = '';
          priceInput.value = '';
          descriptionInput.value = '';
      }
  });

  function displayProducts() {
      productsList.innerHTML = '';
      products.forEach(product => {
          const productItem = document.createElement('div');
          productItem.textContent = `${product.title} - $${product.price} - ${product.description}`;
          productsList.appendChild(productItem);
      });
  }
});
