import React, {useState} from "react";


export default {
    title: 'React.memo demo'
}

export const NewCounter = (props: {count: number}) => {
    console.log('counter')
    return <div>{props.count}</div>
}

const UsersForMemo = (props: {users: string[]}) => {
    console.log("users")
    return <div>
        {props.users.map((user, index)=> <div key={index}>{user}</div>)}
    </div>
}

const Users = React.memo(UsersForMemo)

export const Example1 = () => {

    const [counter,setCounter] = useState(0)
    const [users,setUsers] = useState(['One', 'Two', 'Three'])
return <>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
        <NewCounter count={counter}/>
        <Users users={users}/>
    </>
}