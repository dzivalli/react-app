import React from "react";

import Product from "Src/components/views/Product";
import { productPath } from "Src/helpers/routes";

export default {
  path: productPath(),
  render: ({ match }) => (
    <Product id={match.params.id}/>
  )
}
