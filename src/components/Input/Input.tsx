import {ChangeEvent, useState} from "react";

export const InputStories = () => {
    let [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return <input value={value} onChange={onChange}/>
}
export const ControlledCheckbox = () => {
    let [value, setValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={value} onChange={onChange}/>
}
