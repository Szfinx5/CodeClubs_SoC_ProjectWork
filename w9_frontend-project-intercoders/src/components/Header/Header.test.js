import * as React from "react";
import * as ReactDOM from "react-dom";
import Header from "./Header.js";

//Testing whether the Header component is successfully rendered
it("Header - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
