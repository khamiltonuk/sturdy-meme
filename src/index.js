import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import PinboardContainer from "./src/components/PinboardContainer";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<PinboardContainer />, document.getElementById("root"));
registerServiceWorker();
