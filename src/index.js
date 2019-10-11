import * as React from "react";
import { render } from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import "bulma";

import "./styles.css";
import Editor from "./Editor";

library.add(fab, faLink);

function App() {
  return <Editor />;
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
