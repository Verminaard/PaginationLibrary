import React from 'react';
import PaginationRow from "../lib/pagination/pagination-row/PaginationRow";
import Table from "../lib/table/containers/table/Table";

const DemoTable = (props) => {

   const data = [
      {
         lastName: "someName",
         firstName: "firstName",
         middleName: "middleName",
         login: "login"
      },
      {
         lastName: "someName2",
         firstName: "firstName2",
         middleName: "middleName2",
         login: "login2"
      },
      {
         lastName: "someName3",
         firstName: "firstName3",
         middleName: "middleName3",
         login: "login3"
      },
      {
         lastName: "someName4",
         firstName: "firstName4",
         middleName: "middleName4",
         login: "login4"
      },
      {
         lastName: "someName5",
         firstName: "firstName5",
         middleName: "middleName5",
         login: "login5"
      },
      {
         lastName: "someName6",
         firstName: "firstName6",
         middleName: "middleName6",
         login: "login6"
      },
      {
         lastName: "someName7",
         firstName: "firstName7",
         middleName: "middleName7",
         login: "login7"
      },
      {
         lastName: "someName8",
         firstName: "firstName8",
         middleName: "middleName8",
         login: "login8"
      },
      {
         lastName: "someName9",
         firstName: "firstName9",
         middleName: "middleName9",
         login: "login9"
      },
      {
         lastName: "someName10",
         firstName: "firstName10",
         middleName: "middleName10",
         login: "login10"
      },
      {
         lastName: "someName11",
         firstName: "firstName11",
         middleName: "middleName11",
         login: "login3"
      },{
         lastName: "someName12",
         firstName: "firstName12",
         middleName: "middleName12",
         login: "login12"
      },
      {
         lastName: "someName13",
         firstName: "firstName13",
         middleName: "middleName13",
         login: "login13"
      },


   ];

   const columns = [
      {
         key: 'lastName',
         title: 'Фамилия',
         dataFormatter: (item) => item.lastName,
      },
      {
         key: 'firstName',
         title: 'Имя',
         dataFormatter: (item) => item.firstName,
      },
      {
         key: 'middleName',
         title: 'Отчество',
         dataFormatter: (item) => item.middleName,
      },
      {
         key: 'login',
         title: 'Логин',
         dataFormatter: (item) => item.login,
      }
   ];

   const pagination = (
      <PaginationRow
         page={props.page}
         onChangePage={props.onChangePage}
         onChangeSizePerPage={props.onChangeSizePerPage}
         sizePerPage={props.count}
         itemCount={data.length+1}
      />
   );

   return (
      <Table
         dataList={data}
         paginationRow={pagination}
         columns={columns}
         sizePerPage={props.count}
         page={props.page}
      />
   );
};

export default DemoTable;
