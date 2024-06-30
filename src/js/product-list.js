// Importación de módulos
import productList from "./productList.mjs";
import { getParam, loadHeaderFooter } from "./utils.mjs";

// Carga del encabezado y pie de página
HeaderFooter();

// Obtención de la categoría seleccionada
const category = getParam("category");

// Carga de la lista de productos
productList(".product-list", category);