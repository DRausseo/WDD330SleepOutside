import { renderListWithTemplate } from "./utils.mjs";
import { productCardTemplate } from "./ProductList.mjs";


export default class ProductListing {
  constructor(category, dataSource, listElement) {
    this.category = category;
    this.dataSource = dataSource;
    this.listElement = listElement;
  }

  renderList(list) {
    const filteredList = list.filter((p) => p.Id != "989CG" && p.Id != "880RT");
    renderListWithTemplate(productCardTemplate, this.listElement, filteredList);
  }

  async init() {
    const list = await this.dataSource.getData(this.category);
    this.renderList(list);
  }
}
