import { renderListWithTemplate } from "./utils.mjs";

function productCardTemplate(product) {
  // This function builds the HTML for a single product card
  return `<li class="product-card">
    <a href="/product_pages/index.html?product=${product.Id}">
      <img
        src="${product.Images.PrimaryMedium}"
        alt="Image of ${product.Name}"
      />
      <h3 class="card__brand">${product.Brand.Name}</h3>
      <h2 class="card__name">${product.Name}</h2>
      <p class="product-card__price">$${product.FinalPrice}</p>
    </a>
  </li>`;
}

export default class ProductList {
  constructor(category, dataSource, listElement) {
    // These properties allow for flexibility when using the class
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  async init() {
    // Get product data based on category
    const list = await this.dataSource.getData(this.category);
    // Show the product list
    this.renderList(list);
    // Update the title with the current category
    document.querySelector(".title").innerHTML = this.category;
  }

  renderList(list) {
    // Use the helper function to render the list with the product cards
    renderListWithTemplate(productCardTemplate, this.listElement, list);
  }
}
