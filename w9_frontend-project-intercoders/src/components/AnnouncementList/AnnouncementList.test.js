import * as React from "react";
import * as ReactDOM from "react-dom";
import AnnouncementList from "./AnnouncementList.js";

//Testing whether the AnnouncementList component is successfully rendered
it("AnnouncementList - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<AnnouncementList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
