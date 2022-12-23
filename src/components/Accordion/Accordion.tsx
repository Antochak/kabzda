import React, {useState} from "react";

type AccPropsType = {
    titleValue: string
}

function Accordion(props: AccPropsType) {
    let [collapse, setCollapse] = useState(false)
        return <div>
            <AccordionTitle collapse={collapse} setCollapse={setCollapse} title={props.titleValue}/>
            {collapse && <AccordionBody/> }
        </div>
}
type AccPropsTitleType = {
    title: string
    setCollapse: (value: boolean)=>void
    collapse: boolean
}
const AccordionTitle: React.FC<AccPropsTitleType> = ({setCollapse, collapse,title}) => {
    return <h3 onClick={()=>setCollapse(!collapse)}> --- {title} ---</h3>
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