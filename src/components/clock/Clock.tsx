import React, {useEffect, useState} from "react";

type PropsType = {

}
export const Clock: React.FC<PropsType>=()=> {
    const [date, setDate] = useState(new Date())
    useEffect(()=> {
        const intervalId = setInterval(()=>setDate(new Date()),1000)
        // чтобы врем остановилось, необходимо использовать clearInterval. Иначе время будет "идти" даже после смерти компоненты
        return ()=> {
            clearInterval(intervalId)
        }
    },[])
    // дублирование кода! создадим ниже функцию, которая нам будет добавлять нолик
    // let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
    // let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    // let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()

    // эта функция независима ни от чего, поэтому ее следует вынести в другой файл.
    const addZero = (number: number) => number < 10 ? '0' + number : number
    let seconds = addZero(date.getSeconds())
    let minutes = addZero(date.getMinutes())
    let hours = addZero(date.getHours())
    
    return <div>
        <span>{hours}</span> :
        <span>{minutes}</span> :
        <span>{seconds}</span>
    </div>
}