import {useMemo, useState} from "react";


export default {
    title: 'UseMemo'
}

export const Example1 = () => {
    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(4)

    let ResultA = 1
    let ResultB = 1

    ResultA = useMemo(()=>{
        let tmpResultA = 1
        for (let i = 1; i <= a; i++){
            let fake = 0
            while(fake < 50000000){     // имитация долгих и тяжелых вычислений
                fake++;
                const fakeValue = Math.random()
            }
            tmpResultA = tmpResultA * i;
        }
        return tmpResultA;
    },[a])

    for (let i = 1; i <= b; i++){
        ResultB = ResultB * i;
    }

    return (
        <div>
            <input value={a} onChange={(e)=> setA(+e.currentTarget.value)}/>
            <input value={b} onChange={(e)=> setB(+e.currentTarget.value)}/>
            <hr/>
            <div> Result A: {ResultA}</div>
            <div> Result B: {ResultB}</div>
        </div>
    )
}