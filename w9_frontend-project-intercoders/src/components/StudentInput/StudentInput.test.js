import * as React from "react";
import * as ReactDOM from "react-dom";
import StudentInput from "./StudentInput.js";

//Testing whether the StudentInput component is successfully rendered
it("StudentInput - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StudentInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});
