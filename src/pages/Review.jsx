import React from "react";
import {
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function App() {
  return (
    <MDBCard>
      <MDBCardHeader>Review</MDBCardHeader>
      <MDBCardBody>
        <MDBTypography blockquote className="mb-0">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante.
          </p>
          <footer className="blockquote-footer">
            Jesweed <cite title="Source Title">Codenito</cite>
          </footer>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  );
}
