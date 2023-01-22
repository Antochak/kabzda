import React, {useReducer, useState} from "react";
import {reducer} from "./reducer";

type AccPropsType = {
    titleValue: string
    items: string[]
}


export function UnAccordion(props: AccPropsType) {
    let [collapsed, dispatch] = useReducer(reducer,false)

    const toggle =() => {
        dispatch({type: TOGGLE})
    }
        return <div>
            <AccordionTitle toggle={toggle} title={props.titleValue}/>
            {!collapsed && <AccordionBody items={props.items}/> }
        </div>
}

type AccPropsTitleType = {
    title: string
    toggle: ()=>void
}



const AccordionTitle: React.FC<AccPropsTitleType> = ({toggle,title}) => {
    return <h3 onClick={(e)=>toggle()}> --- {title} ---</h3>
}

type AccBodyPropsType = {
    items: string[]
}


function AccordionBody(props: AccBodyPropsType) {
    return (
        <ul>
            {props.items.map(item=> <li>{item}</li>)}
        </ul>
    )
}
