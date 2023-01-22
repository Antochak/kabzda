import React from "react";

export type colorType = {
    color: boolean
    setColor: (color: boolean)=>void
}

export const TurnOnOff = (props: colorType) => {
    const onStyle = {
        width: '60px',
        height: '40px',
        border: '1px solid black',
        marginRight: '20px',
        backgroundColor: props.color ? 'green' : 'white'
    }
    const offStyle = {
        width: '60px',
        height: '40px',
        border: '1px solid black',
        marginRight: '20px',
        backgroundColor: props.color ? 'white' : 'red'
    }
    const indicator = {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        borderRadius: '20px',
        backgroundColor: props.color ? 'green' : 'red'
    }
    const wrap = {
        display: 'flex',
    }


    return (
            <div style={wrap}>
                <div style={onStyle} onClick={()=>props.setColor(true)} >On</div>
                <div style={offStyle} onClick={()=>props.setColor(false)}>Off</div>
                <div style={indicator}></div>
            </div>
    )
}

//
// import classes from "./OnOffComponent.module.css";
// import React, {useState} from "react";
//
// export const TurnOnOff = () => {
//      let [color, setColor] = useState(true)
//
//     return (<>
//             <div className={classes.main}>
//                 <div onClick={()=> setColor(false)} className={!color ? classes.square + ' ' + classes.red : classes.square}>Off</div>
//                 <div onClick={()=> setColor(true)} className={color ? classes.square + ' ' + classes.green : classes.square}>On</div>
//                 <div className={color ? classes.circle + ' ' + classes.green : classes.circle + ' ' + classes.red}> </div>
//             </div>
//         </>
//     )
// }
