import { getProductsByCategory } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  return `<li class="product-card">
      <a href="/product_pages/index.html?product=${product.Id}">
        <img
          src="${product.Images.PrimaryMedium}"
          alt="Image of ${product.Name}"
        />
        <h3 class="card_brand">${product.Brand.Name}</h3>
        <h2 class="card_name">${product.NameWithoutBrand}</h2>
        <p class="product-card_price">$${product.FinalPrice}</p>
      </a>
    </li>`;
}

export default async function productList(selector, category) {
  // Get the element where we will insert the list
  const el = document.querySelector(selector);

  // Get the list of products
  const products = await getProductsByCategory(category);
  console.log(products);
  // Render the product list to the element
  renderListWithTemplate(productCardTemplate, el, products);

  // Set the page title based on the category
  document.querySelector("title").innerHTML = category;
}
