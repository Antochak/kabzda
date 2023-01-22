import React from "react";
import {TurnOnOff} from "./OnOffComponent";
import {useState} from "react";


export default {
    title: 'TurnOnOff',
    component: TurnOnOff,
};

export const OnComponent = () => <TurnOnOff color={true} setColor={x=>x}/>
export const OffComponent = () => <TurnOnOff color={false} setColor={x=>x}/>
export const ModeChanging = () => {
    const [color, setColor] = useState(false)
    return <TurnOnOff color={color} setColor={setColor}/>
}
