import React from "react";
import ReactDOM from "react-dom";
import realContent from "./content";
import exampleContent from "./content.example";
import App from "./components/App";
import "./index.css";

const content = process.env.REACT_APP_USE_EXAMPLE_CONTENT
	? exampleContent
	: realContent;

ReactDOM.render(<App content={content} />, document.getElementById("root"));
