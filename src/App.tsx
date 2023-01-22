import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import {TurnOnOff} from "./components/OnOff/OnOffComponent";
import {UnAccordion} from "./components/UncontrolledAccordion/UnAccordion";


function App() {
    let [collapsed, setCollapsed] = useState(false)
    const toggle =() => {
        setCollapsed(!collapsed)
    }

    const [color, setColor] = useState(false)
  return (
    <div>

      <UnAccordion titleValue = {"List"} items={['asdasd','asfsdf0','sdgha']}/>
      <Accordion titleValue = {"Menu"} toggle={toggle} collapsed={collapsed} items={['asdasd','asfsdf0','sdgha']}/>
      <Rating/>
      <TurnOnOff color={color} setColor={setColor}/> {'Значение: ' + color.toString()}
    </div>
  );
}

export default App;

