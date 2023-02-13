import React, {useEffect, useMemo, useState} from 'react'

export default {
    title: 'useEffect demo'
}

export const Example = () => {

    const [counter, setCounter] = useState(0)

    useEffect(()=> {
    document.title = counter.toString()
    },[])  // сработает один раз при отрисовке
    useEffect(()=> {
        document.title = counter.toString()
    },[counter]) // сработает каждый раз при изменении counter
    useEffect(()=> {
        document.title = counter.toString()
    }) // будет срабатывать всегда

    return <div>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        value: {counter}
    </div>
}
export const AsyncExample = () => {

    const [counter, setCounter] = useState(1)

    // useEffect(()=> {
    //     console.log('setTimeout')
    //     setTimeout(()=>document.title = counter.toString(), 1000)
    // },[])

    // useEffect(()=> {
    //     console.log('setInterval')
    //     setInterval(()=> setCounter(counter + 1), 1000)
    // },[counter])  // если убрать зависимость то, каждую секунду будет отображаться инициазизационное значение 1
    //
    useEffect(()=> {
        console.log('setInterval')
        setInterval(()=> setCounter(state => state + 1), 1000)
    },[])  // берет иниц значение из counter, и инкрементирует внутреннюю переменную state и set'ает его в counter

    return <div>
        <button onClick={()=> setCounter(counter + 1)}>+</button>
        value: {counter}
    </div>
}