import Products from "Src/components/views/Products"
import { productsPath } from "Src/helpers/routes.js"

export default {
  path: productsPath(),
  component: Products,
  exact: true
}
