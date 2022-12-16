import classes from "./OnOffComponent.module.css";
import React, {useState} from "react";


export const TurnOnOff = () => {
    let [color, setColor] = useState(true)
    return (<>
            <div className={classes.main}>
                <div onClick={()=> setColor(false)} className={!color ? classes.square + ' ' + classes.red : classes.square}>Off</div>
                <div onClick={()=> setColor(true)} className={color ? classes.square + ' ' + classes.green : classes.square}>On</div>
                <div className={color ? classes.circle + ' ' + classes.green : classes.circle + ' ' + classes.red}> </div>
            </div>
        </>
    )
}
