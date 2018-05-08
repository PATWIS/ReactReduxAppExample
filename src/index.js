import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Hello name="CodeSandbox" />
    <Button color="danger">Danger!</Button>
    <h2>Start editing to see some magic happen {"\u2728"}</h2>
  </div>
);

render(<App />, document.getElementById("root"));
