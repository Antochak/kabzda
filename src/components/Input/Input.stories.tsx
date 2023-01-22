import React, {ChangeEvent} from "react";
import {useState} from "react";

export default {
    title: 'InputStories',
    // component: InputStories,
};

export const InputStories = () => {
    let [value, setValue] = useState('')
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <>
        <input value={value} onChange={onChange}/>
    value: {value}
    </>)
}
export const ControlledCheckbox = () => {
    let [value, setValue] = useState(true)
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.checked)
    }
    return <input type={"checkbox"} checked={value} onChange={onChange}/>
}
export const ControlledSelect = () => {
    let [value, setValue] = useState<string | undefined>(undefined)
    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
         setValue(e.currentTarget.value)
    }
    return <select value={value} onChange={onChange}>
        <option>none</option>
        <option value={'1'} >1</option>
        <option value={'2'}>2</option>
        <option value={'3'}>3</option>
    </select>
}