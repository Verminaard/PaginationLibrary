import React from 'react';
import {render} from "react-dom";
import PaginationRow from "./lib/pagination/pagination-row/PaginationRow";

const App = () => (
   <PaginationRow
      page={1}
      sizePerPage={10}
      itemCount={100}
   />
);

render(<App/>, document.getElementById("root"));