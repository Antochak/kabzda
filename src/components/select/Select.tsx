import React, {useEffect, useState} from 'react'
import classes from "./Select.module.css";

type ItemType = {
    title: string
    value: any
}
type SelectPropsType = {
    value?: any
    onChange: (value: any)=> void
    items: ItemType[]
}
export const Select = (props: SelectPropsType) => {
    const [active, setActive] = useState(false)
    const [hoveredEl, sethoveredEl] = useState(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredEl)

    useEffect(()=> {
        sethoveredEl(props.value);
    }, [props.value])

    const toggleItems = () => {
        setActive(!active)
    }
    const onClickItem = (value: any) => {
        props.onChange(value);
        toggleItems();
    }
    const onKeyDownHandler = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value == hoveredEl) {
                    const nextValue = e.key === "ArrowDown" ? props.items[i + 1] : props.items[i - 1]
                    if (nextValue) {
                        props.onChange(nextValue.value);
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.items[0].value);
            }
        }
        if(e.key === "Enter" || e.key === "Escape") {
            toggleItems()
        }
    }
    return (
        <div>
            <div className={classes.select} onKeyUp={onKeyDownHandler} tabIndex={0}>
                <span
                    className={classes.main}
                    onClick={toggleItems}
                >
                    {selectedItem && selectedItem.title}
                </span>
                {
                    active &&
                        <div className={classes.items}>
                        {props.items.map(i=>
                            <div
                                onMouseEnter={()=>sethoveredEl(i.value)}
                                className={classes.item + ' ' + (hoveredItem == i ? classes.selected : '')}
                                key={i.value}
                                onClick={()=> {
                                onClickItem(i.value)}}>
                                {i.title}
                            </div>)}
                        </div>
                }
            </div>
        </div>
    )
}