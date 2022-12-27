import React, {useState} from "react";

export function Rating() {
    let [value, setValue] = useState(0)
    return (
        <div>
            <Star selected={value > 0} setValue={setValue} value={1}/>
            <Star selected={value > 1} setValue={setValue} value={2}/>
            <Star selected={value > 2} setValue={setValue} value={3}/>
            <Star selected={value > 3} setValue={setValue} value={4}/>
            <Star selected={value > 4} setValue={setValue} value={5}/>
        </div>
    )
}
type StarPropsType = {
    selected: boolean
    setValue: (value: number)=>void
    value: number
}
function Star(props: StarPropsType) {
    const changeValue =() => {
        props.setValue(props.value)
        console.log(props.value)
    }
    return <span onClick={changeValue}>{props.selected ? <b> Star </b> : 'Star '}</span>
}

// import React from "react";
//
// type RatingPropsType= {
// value: number
// }
// export function Rating(props: RatingPropsType) {
//     return (
//         <div>
//             <Star selected={props.value > 0}/>
//             <Star selected={props.value > 1}/>
//             <Star selected={props.value > 2}/>
//             <Star selected={props.value > 3}/>
//             <Star selected={props.value > 4}/>
//         </div>
//     )
// }
// type StarPropsType = {
//     selected: boolean
// }
// function Star(props: StarPropsType) {
//    return props.selected ? <span> <b>Star</b> </span> : <span>Star</span>
//
// }
//
