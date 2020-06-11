import React from 'react';
import uniqueId from 'lodash/uniqueId';

import TableRow from '../row/TableRow';
import RowEmptyList from '../row-empty-list/RowEmptyList';

const TableBody = (props) => {
   const rows = [];
   const {
      dataList,
      columns,
      paginationRow,
      emptyText,
      selectOptions,
      getRowClassName,
      sizePerPage,
      page
   } = props;
   if (dataList && dataList.length) {
      let by = 0
      let to = dataList.length
      if (!(sizePerPage === undefined || page === undefined)) {
         by = page === 1 ? 1 : (page - 1) * sizePerPage;
         to = dataList.length+1 >= page * sizePerPage ? page * sizePerPage : (page * sizePerPage) - (page * sizePerPage - dataList.length-1)
      }

      for (let i = by; i < to; i++) {
         rows.push(
            <TableRow
               key={dataList[i-1].id || uniqueId()}
               columns={columns}
               getRowClassName={getRowClassName}
               selectOptions={selectOptions}
               item={dataList[i-1]}
            />
         );
      }
      return (
         <tbody>
            {rows}
            {paginationRow && (
               <tr key="pagination" className="bg-white">
                  <td>{paginationRow}</td>
               </tr>
            )}
         </tbody>
      );
   } else {
      return (
         <tbody>
            <RowEmptyList columnsLength={columns.length} text={emptyText} />
         </tbody>
      );
   }
};

export default TableBody;
