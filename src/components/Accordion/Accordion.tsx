import React, {useState} from "react";

type AccPropsType = {
    titleValue: string
    toggle: ()=>void
    collapsed: boolean
    items: string[]
}

export function Accordion(props: AccPropsType) {
        return <div>
            <AccTitle toggle={props.toggle} title={props.titleValue}/>
            {!props.collapsed && <AccBody items={props.items}/> }
        </div>
}

type AccPropsTitleType = {
    title: string
    toggle: ()=>void
}

export const AccordionTitle: React.FC<AccPropsTitleType> = ({toggle,title}) => {
    return <h3 onClick={(e)=>toggle()}> --- {title} ---</h3>
}

type AccBodyPropsType = {
    items: string[]
}


export function AccordionBody(props: AccBodyPropsType) {
    return (
        <ul>
            {props.items.map(item=> <li>{item}</li>)}
        </ul>
    )
}

const AccTitle = React.memo(AccordionTitle)
const AccBody = React.memo(AccordionBody)
export default Accordion