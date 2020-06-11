import React from 'react';
import {render} from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import DemoContainer from "./demo/DemoContainer";

const App = () => (
   <DemoContainer/>
);

render(<App/>, document.getElementById("root"));