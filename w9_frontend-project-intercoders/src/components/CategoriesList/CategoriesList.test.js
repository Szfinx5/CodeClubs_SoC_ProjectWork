import * as React from "react";
import * as ReactDOM from "react-dom";
import CategoriesList from "./CategoriesList.js";

//Testing whether the CategoriesList component is successfully rendered
it("CategoriesList - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CategoriesList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
