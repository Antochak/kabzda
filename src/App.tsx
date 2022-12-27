import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {TurnOnOff} from "./components/OnOff/OnOffComponent";


function App() {
    let [collapsed, setCollapsed] = useState(false)
    const toggle =() => {
        setCollapsed(!collapsed)
    }
    const [color, setColor] = useState(false)
  return (
    <div>

      <Accordion titleValue = {"List"} toggle={toggle} collapsed={collapsed}/>
      <Accordion titleValue = {"Menu"} toggle={toggle} collapsed={collapsed}/>
      <Rating/>
      <TurnOnOff color={color} setColor={setColor}/> {'Значение: ' + color.toString()}
    </div>
  );
}

export default App;

