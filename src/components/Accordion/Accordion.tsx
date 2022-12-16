import React from "react";

type AccPropsType = {
    titleValue: string,
    collapsed: boolean
}
function Accordion(props: AccPropsType) {

        return <div>
            <AccordionTitle title={props.titleValue}/>
            {props.collapsed && <AccordionBody/> }
        </div>

}

type AccPropsTitleType = {
    title: string
}
function AccordionTitle(props: AccPropsTitleType) {
    return <h3> --- {props.title} ---</h3>
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