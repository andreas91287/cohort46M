import React from 'react'
import { bgWrapper } from '../hoc/bgWrapper'

const Student = ({ name, age }) => {
    return (
        <div>
            <h1>Name: {name}</h1>
            <h1>Age: {age}</h1>
        </div>
    )
}

export default bgWrapper(Student)