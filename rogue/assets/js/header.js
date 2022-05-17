import React from 'react';
import { MDBCol, MDBRow } from "mdb-react-ui-kit";


export const Header = (props) => {
  return (
    <>
      <MDBRow>
        <MDBCol sm="12" md="12" lg="12">
          <div className="text-center text-primary pt-2 pb-2">
            <h2>Hola Emiliano!</h2>
            <hr />
          </div>
        </MDBCol>
      </MDBRow>
    </>
  )
}