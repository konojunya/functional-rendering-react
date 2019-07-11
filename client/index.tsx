import * as React from "react";
import { render } from "react-dom";

const App: React.FC = () => <h1>Hello, React app!</h1>;

render(<App />, document.getElementById("app"));
