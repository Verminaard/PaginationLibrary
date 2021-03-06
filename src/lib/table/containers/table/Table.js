import React from 'react';

import TableHeader from '../../elements/common/table-header/TableHeader';
import TableBody from '../../elements/common/body/TableBody';

const Table = (props) => (
   <div>
      <table
         id={props.id}
         className={props.className || 'table table-striped table-bordered table-hover'}>
            <TableHeader
               columns={props.columns}
            />
         <TableBody
            dataList={props.dataList}
            paginationRow={props.paginationRow}
            columns={props.columns}
            readOnly={props.readOnly}
            sizePerPage={props.sizePerPage}
            page={props.page}
         />
      </table>
   </div>
);

export default Table;
