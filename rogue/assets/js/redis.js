import React from 'react';
import {MDBCard, MDBCardBody, MDBCardTitle, MDBCol} from "mdb-react-ui-kit";


export const Redis = (props) => {

  return (
    <>
      <MDBCol sm="12" md="6" lg="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              Almacena algo en memoria usando Redis.
            </MDBCardTitle>
            Message: {props.message}
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </>
  )
}