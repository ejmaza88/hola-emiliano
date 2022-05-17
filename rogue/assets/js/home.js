import React from 'react';
import ReactDOM from 'react-dom';
import FadeIn from 'react-fade-in';
import {MDBCol, MDBRow} from 'mdb-react-ui-kit';

import {Header} from "./header";
import {Postgres} from "./pg";
import {Redis} from "./redis";


import '../css/home.css'


function App(props) {


  return (
    <>
      <FadeIn>
        <Header/>

        <MDBRow>
          <Postgres {...props} />

          {/*<Redis {...props} />*/}
        </MDBRow>
      </FadeIn>
    </>
  )
}


// component mounts in app/home.html
ReactDOM.render(
  <App {...window.JS_DATA} />,
  document.getElementById('home-root')
);
