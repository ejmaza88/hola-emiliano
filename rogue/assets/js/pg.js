import React, {useState, useRef} from 'react';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

import {addMessage} from "./helpers/network";


export const Postgres = (props) => {
  const [messages, setMessages] = useState(props.messages)

  const nameRef = useRef('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = nameRef.current['message'].value

    addMessage({message: message}, (data) => {
      setMessages([{id:data.messageId, message: message}, ...messages])
      nameRef.current.reset()
    })
  }

  return (
    <>
      <MDBCol sm="12" md="6" lg="6">
        <MDBCard>
          <MDBCardBody>
            <MDBCardTitle>
              Almacena algo en la base de datos Postgres
            </MDBCardTitle>

            <form onSubmit={handleSubmit} ref={nameRef}>
              <MDBInput className='mb-4 mt-4' size='sm' label='Corto Mensaje' name='message' id='message'/>
              {/*<MDBInput className='mb-4 mt-4' size='sm' label='Corto Mensaje' name='message' id='message' inputRef={nameRef}/>*/}

              <MDBBtn size='sm' type='submit' color='success' className='mb-4'>Agregar</MDBBtn>
            </form>

            <hr />

            <ul className="list-group list-group-light">
              {messages.map(i => (
                <li key={i.id} className="list-group-item">{i.message}</li>
              ))}
            </ul>

          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </>
  )
}