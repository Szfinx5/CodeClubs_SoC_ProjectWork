import * as React from "react";
import * as ReactDOM from "react-dom";
import Announcement from "./Announcement.js";

//Testing whether the Announcement component is successfully rendered
it("Announcement - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Announcement />, div);
  ReactDOM.unmountComponentAtNode(div);
});
