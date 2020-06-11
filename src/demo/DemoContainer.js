import React, { Component } from 'react';
import DemoTable from "./DemoTable";
import update from 'immutability-helper';

class DemoContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         pageable: {
            page: 1,
            count: 10
         }
      };

      this.onChangePage = this.onChangePage.bind(this);
      this.onChangeSizePerPage = this.onChangeSizePerPage.bind(this);
   }

   onChangePage(page) {
      const oldPage = this.state.pageable.page;
      if (oldPage === page) {
         return;
      }
      const newState = update(this.state, {
         pageable: {
            page: { $set: page }
         }
      });
      this.setState(newState);
   }

   onChangeSizePerPage(sizePerPage) {
      const oldSizePerPage = this.state.pageable.count;
      if (oldSizePerPage === sizePerPage) {
         return;
      }

      const newState = update(this.state, {
         pageable: {
            page: { $set: 1 },
            count: { $set: sizePerPage }
         }
      });
      this.setState(newState);
   }

   render() {
      const {page, count} = this.state.pageable;

      return (
         <DemoTable page={page} count={count}
                      onChangePage={this.onChangePage}
                      onChangeSizePerPage={this.onChangeSizePerPage}

         />
      );
   }
}

export default DemoContainer;

