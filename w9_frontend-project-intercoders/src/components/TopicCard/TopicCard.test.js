import * as React from "react";
import * as ReactDOM from "react-dom";
import TopicCard from "./TopicCard.js";

//Testing whether the TopicCard component is successfully rendered
it("TopicCard - renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<TopicCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
