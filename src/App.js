 import React from 'react';
 import NavBar from './Components/NavBar';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Heroo from './Components/Heroo';
import {SliderDataOne} from './Data/SliderData';

function App() {
  return (
    <div className="App">
    <GlobalStyle/>
    <NavBar/>
    <Heroo slides = {SliderDataOne}/>
    </div>
  );
}

export default App;
