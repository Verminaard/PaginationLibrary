import React from 'react';

import TableInfo from '../table-info/TableInfo';
import SizePerPage from '../size-per-page/SizePerPage';
import PaginationList from '../pagination-list/PaginationList';
import Const from "../constants/const";

const PaginationRow = (props) => (
   <div className="row">
      <div className="col-xs-7 pull-left">
         <TableInfo page={props.page} sizePerPage={props.sizePerPage} itemCount={props.itemCount} />
         {props.itemCount > props.sizePerPage && (
            <PaginationList
               currPage={props.page}
               sizePerPage={props.sizePerPage}
               changePage={props.onChangePage}
               pageStartIndex={props.pageStartIndex}
               paginationSize={props.paginationSize || Const.PAGINATION_SIZE}
               dataSize={props.itemCount}
               prePage={props.prePage || Const.PRE_PAGE}
               nextPage={props.nextPage || Const.NEXT_PAGE}
               firstPage={props.firstPage || Const.FIRST_PAGE}
               lastPage={props.lastPage || Const.LAST_PAGE}
            />
         )}
      </div>
      <div className="col-xs-5">
         {props.itemCount > Const.SIZE_PER_PAGE && (
            <div className="col-xs-12">
               <div className="pull-right">
                  <div>
                     <SizePerPage
                        onChange={props.onChangeSizePerPage}
                        sizePerPage={props.sizePerPage}
                     />
                     <span>&nbsp;записей на странице</span>
                  </div>
               </div>
            </div>
         )}
      </div>
   </div>
);

export default PaginationRow;
