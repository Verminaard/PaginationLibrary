import React from 'react';
import uniqueId from 'lodash/uniqueId';

import HeaderColumn from '../header-column/HeaderColumn';

const TableHeader = ({ columns }) => {
   const headerColumns = [];
   for (let i = 0; i < columns.length; i++) {
      const key = columns[i].key || uniqueId();
      headerColumns.push(
         <HeaderColumn
            key={key}
            id={key}
            width={columns[i].width}
            title={columns[i].title}
         />
      );
   }

   return (
      <thead>
         <tr>{headerColumns}</tr>
      </thead>
   );
};

export default TableHeader;
