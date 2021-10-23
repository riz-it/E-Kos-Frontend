import {
  faMoneyBillAlt,
  faShieldAlt,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBCard,
  MDBCardBody,
  MDBCardText,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
} from "mdbreact";
import React, { Component } from "react";

export class DescriptionComponent extends Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <div className="row justify-content-center">
          <span className="text-title-2">Lelah jadi DeadWood?</span>
        </div>
        <div className="row justify-content-center">
          <span className="text-paragraf">
            Kemas pakaianmu dan merantau bersamaku.
          </span>
        </div>
        <div className="row mt-5">
          <MDBCol>
            <MDBCard className="rounded">
              <MDBCardBody>
                <FontAwesomeIcon
                  size="6x"
                  icon={faStar}
                  className="mb-5 icon-description mt-5"
                />
                <MDBCardTitle>Kosan</MDBCardTitle>
                <MDBCardText className="mb-5">rasa apartemen.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className="rounded">
              <MDBCardBody>
                <FontAwesomeIcon
                  size="6x"
                  icon={faShieldAlt}
                  className="mb-5 icon-description mt-5"
                />
                <MDBCardTitle>Kosan</MDBCardTitle>
                <MDBCardText className="mb-5">sangat safety.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol className="card-3">
            <MDBCard className="rounded">
              <MDBCardBody>
                <FontAwesomeIcon
                  size="6x"
                  icon={faMoneyBillAlt}
                  className="mb-5 icon-description mt-5"
                />
                <MDBCardTitle>Kosan</MDBCardTitle>
                <MDBCardText className="mb-5">ramah kantong.</MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </div>
        <div className="mt-5 row justify-content-center">
          <span className="text-title-3">Kurangi deadwood di negri ini</span>
        </div>
        <div className="row justify-content-center">
          <span className="text-description-2">
            dan jadilah menantu idaman.
          </span>
        </div>
      </MDBContainer>
    );
  }
}

export default DescriptionComponent;
