import React from 'react';

import './App.css';
import Header from './Header'
import Main from './Main'
import {BrowserRouter} from 'react-router-dom'


function App(props) {
  return (
    <div>
      <BrowserRouter>
      <Header />
      <Main env={props.env}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
