import React, {useState} from "react";

type AccPropsType = {
    titleValue: string
    toggle: ()=>void
    collapsed: boolean
}

function Accordion(props: AccPropsType) {

        return <div>
            <AccordionTitle toggle={props.toggle} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody/> }
        </div>
}
type AccPropsTitleType = {
    title: string
    toggle: ()=>void
}
const AccordionTitle: React.FC<AccPropsTitleType> = ({toggle,title}) => {
    return <h3 onClick={toggle}> --- {title} ---</h3>
}
function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}
export default Accordion