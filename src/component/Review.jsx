import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBTypography,
} from "mdb-react-ui-kit";

function Review() {
  return (
    <div className="flex justify-center items-center h-[100vh] text-center">
      <MDBCard>
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
    </div>
  );
}

export default Review;
