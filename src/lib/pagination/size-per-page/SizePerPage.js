import React from 'react';

import SimpleSelect from "./SimpleSelect";
import Const from "../constants/pagConsts";

const SizePerPage = ({ sizePerPage, options, onChange }) => (
   <SimpleSelect
      className="btn btn-sm bg-white dropdown-toggle"
      notClearableOptions
      onChange={(value) => onChange && onChange(value)}
      value={{
         id: sizePerPage || Const.SIZE_PER_PAGE,
         name: sizePerPage || Const.SIZE_PER_PAGE
      }}
      options={options || Const.SIZE_PER_PAGE_LIST}
   />
);

export default SizePerPage;
