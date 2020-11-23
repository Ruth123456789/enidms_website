import React from 'react';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import NavbarPage from "./sideBar"
import  ButtonPage from "./buttn"
const BasicTable = () => {
  return (
    <>
    <NavbarPage/>
    <br/>
    <br/>
    <br/>
    <h1>Criminal record</h1>
    <br/>

    <MDBTable bordered>
     
      <MDBTableHead color="deafult-color"  textBlack>
        <tr>
          
          <th>First name</th>
          <th>Last name</th>
          <th>AGE</th>
          <th>ssn</th>
          <th>DEGREE OF CRIME</th>
          <th>Crime Discription</th>
          
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>mekuriya</td>
          <td>werku</td>
          <td>20</td>
          <td>afd</td>
          <td>1<sup>st</sup>degree</td>
          <td>theft</td>
          
          

        
          
          
        </tr>
        <tr>
          <td>abel</td>
          <td>assefa</td>
          <td>20</td>
          <td>sdfg</td>
          < td>1<sup>st</sup>degree</td>
          <td>murderer</td>
          
        </tr>
        <tr>
          <td>elias</td>
          <td>tesfaya</td>
          <td>22</td>
          <td>jfkl</td>
          < td>1<sup>st</sup>degree</td>
          <td>Armed Robbery</td>
          
        </tr>
        <tr>
          <td>fitsum</td>
          <td>Desta</td>
          <td>24</td>
          <td>qwe</td>
          < td>3<sup>rd</sup>degree</td>
          <td>theft</td>
          
        </tr>
        <tr>
          <td>nahom</td>
          <td>getu</td>
          <td>20</td>
          <td>sdfg</td>
          < td>1<sup>st</sup>degree</td>
          <td>murderer</td>
          
        </tr>
        <tr>
          <td>yared</td>
          <td>shisema</td>
          <td>20</td>
          <td>sdfg</td>
          < td>3<sup>rd</sup>degree</td>
          <td>theft</td>
          
        </tr>
        <tr>
          <td>Selmon </td>
          <td>Tekalenge</td>
          <td>20</td>
          <td>sdfg</td>
          < td>1<sup>st</sup>degree</td>
          <td>murderer</td>
          
        </tr>
        <tr>
          <td>abebe</td>
          <td>melese</td>
          <td>22</td>
          <td>sdfg</td>
          < td>1<sup>st</sup>degree</td>
          <td>murderer</td>
          
        </tr>
        <tr>
          <td>selemon </td>
          <td>teka</td>
          <td>21</td>
          <td>sdfg</td>
          < td>1<sup>st</sup>degree</td>
          <td>theft</td>
          
        </tr>
        <tr>
          <td>abera</td>
          <td>balecha</td>
          <td>25</td>
          <td>vxhd</td>
          < td>2<sup>nd</sup>degree</td>
          <td>Perjuri</td>
          
        </tr>
        <tr>
          <td>nahom</td>
          <td>Fekadu</td>
          <td>26</td>
          <td>sakg</td>
          < td>3<sup>rd</sup>degree</td>
          <td>murderer</td>
          
        </tr>
        
        
      </MDBTableBody>
    </MDBTable>
  </>
  );
}

export default BasicTable;