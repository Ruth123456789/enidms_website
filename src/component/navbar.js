import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class NavbarPage extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
    <Router>
      <MDBNavbar color="default-grey darken-4 lighten-2" dark expand="md">
        <MDBNavbarBrand>
          <strong className="black-text">ENDIMS</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/" className="black-text">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/ABout" className="black-text">About Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/Contact" className="black-text">Contact Us</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline black-text">Login</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default black-text">
                  <MDBDropdownItem href="/">Goverment</MDBDropdownItem>
                  <MDBDropdownItem href="/About">Health</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Education</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Police</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="twitter" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="waves-effect waves-light" to="#!">
                <MDBIcon fab icon="google-plus-g" />
              </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" className="black"/>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default black-text">
                  <MDBDropdownItem href="#!" className="black-text">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!" className="black-text">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!" className="black-text">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!" className="black-text">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </Router>
    );
  }
}

export default NavbarPage;