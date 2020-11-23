import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import NavbarPage from "./sideBar"
import DatatablePage from "./criminaldatabase"


const SearchPage = () => {

  return (
    <>
    
    <NavbarPage/>
    <br/>
    <h1>CRIMINAL DATABASE</h1>

    < DatatablePage/>
    </>
  );
}

export default SearchPage;