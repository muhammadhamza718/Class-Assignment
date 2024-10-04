import React from "react"
interface Props{
    name: string
    age: number
    salary: number
}

export default function Student(props: Props) {
    console.log(props)

    return(
        <>
        <h1>name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
        <h1>salary: {props.salary}</h1>
        </>
    )
}