import React from "react";
import  NavbarPage from "./sideBar";
import DropdownPage from "./DEGREEOFCRIME"
import ButtonPage from "./buttn"

const InputPage = () => {
  return (
    <>
    <NavbarPage/>
    <br/>
    <br/>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">First Name</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
      />
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Last Name</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
      />
    </div>
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Age</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
      />
    </div>
    
    <div className="form-group">
      <label htmlFor="formGroupExampleInput">Crime discription</label>
      <input
        type="text"
        className="form-control"
        id="formGroupExampleInput"
      />
      <label htmlFor="formGroupExampleInput">DEGREE OF CRIME</label>
                       <DropdownPage/>
      
     
      <div className="form-group">
      <label htmlFor="exampleDisabled" className="disabled">Photo Of Criminal</label>
      <input type="text" id="exampleDisabled" className="form-control" placeholder="Disabled input" disabled />
    </div>
    </div>
    <br/>
    <ButtonPage/>

    <br/>
    <br/>
    </>
  );
}

export default InputPage