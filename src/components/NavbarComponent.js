import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export class NavbarComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <MDBNav className="container-navigator">
          <MDBNavItem>
            <MDBNavLink className="navigator" to="#!">
              Utama
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="navigator" to="#!">
              Destinasi
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink className="navigator" to="#!">
              Tentang Aplikasi
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
      </BrowserRouter>
    );
  }
}

export default NavbarComponent;
