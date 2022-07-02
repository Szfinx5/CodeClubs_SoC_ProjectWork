import * as React from "react";
import * as ReactDOM from "react-dom";
import Volunteer from "./Volunter.js";

//Testing whether the Volunteer component is successfully rendered
it("Volunteer - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Volunteer />, div);
  ReactDOM.unmountComponentAtNode(div);
});
