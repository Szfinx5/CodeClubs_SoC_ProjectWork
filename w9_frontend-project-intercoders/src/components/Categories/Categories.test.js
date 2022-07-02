import * as React from "react";
import * as ReactDOM from "react-dom";
import Categories from "./Categories.js";

//Testing whether the Categories component is successfully rendered
it("Categories - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Categories />, div);
  ReactDOM.unmountComponentAtNode(div);
});
