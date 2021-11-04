 import React, {useState} from 'react';
 import NavBar from './Components/NavBar';
import './App.css';
import GlobalStyle from './GlobalStyle';
import Heroo from './Components/Heroo';
import {SliderDataOne} from './Data/SliderData';
import DropDown from './Components/DropDown';
import InfoSection from './Components/InfoSection';
function App() {

  const[isOpen, setIsOpen] = useState(false);

  const toggle = () =>{ 
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">

    <GlobalStyle/>
    <NavBar toggle = {toggle}/>
    <DropDown isOpen = {isOpen} toggle = {toggle}/>
    <Heroo slides = {SliderDataOne}/>
    <InfoSection/>
    </div>
  );
}

export default App;
