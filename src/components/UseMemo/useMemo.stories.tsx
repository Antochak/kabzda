import React, {useCallback, useMemo, useState} from "react";

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

export const AsUseCallback = () => {
    console.log('AsUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBook] = useState(['React', 'JS', 'CSS', 'HTML'])

//обернули в Мемо функцию,
    // const addBook = () => {
    //     const newBook = [...books, 'Angular' + new Date().getTime()];
    //     setBook(newBook)
    // }
    // const addBookMemo = useMemo(()=>{
    //     return addBook
    // },[books])

    // укороченный вариант написания - использование useCallback
    const addBookUC = useCallback(()=> {
        const newBook = [...books, 'Angular' + new Date().getTime()];
        setBook(newBook)
    },[books])

    return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>

        {counter}
        {/*<Book addBook={addBookMemo}/>*/}
        <Book addBook={addBookUC}/>
    </>
}

type BookSecretPropsType = {
    addBook: ()=>void
}

const BookSecret = (props: BookSecretPropsType) => {
    console.log('BookSecret')
    return <div>
        <button onClick={()=>props.addBook()}>Add book</button>
    </div>
}
const Book = React.memo(BookSecret)