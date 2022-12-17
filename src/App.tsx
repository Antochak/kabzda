import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {TurnOnOff} from "./components/OnOff/OnOffComponent";


function App() {
  return (
    <div>
      <Accordion titleValue = {"Menu"}  />
      <Accordion titleValue = {"List"}  />
      <Rating value={5}/>
      <TurnOnOff/>
    </div>
  );
}

export default App;

