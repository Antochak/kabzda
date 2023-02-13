import React, {useMemo, useState} from 'react'

export default {
    title: 'useState demo'
}
export const bigData = () => {
    return 13535752436356
}
export const Example = () => {

    // let inicialValue = useMemo(bigData,[])
    // const [counter, setCounter] = useState(0)

    const [counter, setCounter] = useState(bigData)

    let changer = (counterValue: number)=> counterValue + 1

    return <div>
        <button onClick={()=> setCounter(changer)}>+</button>
        {counter}
    </div>
}