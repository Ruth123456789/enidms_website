import React from "react";
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from "mdbreact";

const DropdownPage = () => {
  return (
    <MDBDropdown>
      <MDBDropdownToggle caret color="default">
        DEGREE OF CRIME COMMITTED
      </MDBDropdownToggle>
      <MDBDropdownMenu right basic>
        <MDBDropdownItem>1<sup>st</sup> DEGREE</MDBDropdownItem>
        <MDBDropdownItem>2<sup>nd</sup> DEGREE</MDBDropdownItem>
        <MDBDropdownItem>3<sup>rd</sup> DEGREE</MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
  );
}

export default DropdownPage;