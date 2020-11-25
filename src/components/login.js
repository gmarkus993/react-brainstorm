import React from "react"

export default function login(props){
    return(
        <div>
            <button onClick={() => props.sayHello()}>Login</button>
            <button onClick={() => props.sayHello()}>Register</button>
        </div>
    )
}

