import React from 'react';
import { MDBDataTable } from 'mdbreact';
import NavbarPage from "./sideBar"

const DatatablePage = () => {

  const data = {
    
    columns: [
      {
        label: 'First Name',
        field: 'fname',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Last Name',
        field: 'lname',
        sort: 'asc',
        width: 270
      },
      {
        label: 'AGE',
        field: 'age',
        sort: 'asc',
        width: 200
      },
      {
        label: 'SSN',
        field: 'ssn',
        sort: 'asc',
        width: 100
      },
      {
        label: 'Crime degree',
        field: 'cdegree',
        sort: 'asc',
        width: 150
      },
      {
        label: 'Crime Discription',
        field: 'cdiscription',
        sort: 'asc',
        width: 100
      }
    ],
    rows: [
      {
        fname: 'Abel',
        lname: 'assefa',
        age: '23',
        ssn: 'asd',
        cdegree: '2nd degree',
        cdiscription: 'murderer'
      },
      {
        fname: 'yared',
        lname: 'shisema',
        age: '23',
        ssn: 'gghh',
        cdegree: '1st degree',
        cdiscription: 'robbery'
      },
      {
        fname: 'elias',
        lname: 'tesfaye',
        age: '24',
        ssn: 'vbn',
        cdegree: '1st degree',
        cdiscription: 'theft'
      },
      {
        fname: 'selam ',
        lname: 'werku',
        age: '32',
        ssn: 'fsgh',
        cdegree: '2nd degree',
        cdiscription: 'theft'
      },

      {
        fname: 'Rhona',
        lname: ' Davidson',
        age: '21',
        ssn: 'dgjdfj',
        cdegree: '1st degree',
        cdiscription: '$327'
      },
      {
        fname: 'Colleen ',
        lname: 'Hurst',
        age: '21',
        ssn: 'werty',
        cdegree: '1st degree',
        cdiscription: 'theft'
      }
    ]
  };

  return (
    <MDBDataTable
     
      maxHeight="200px"
      
      bordered
      small
      data={data}
    />
    
  );
}

export default DatatablePage;