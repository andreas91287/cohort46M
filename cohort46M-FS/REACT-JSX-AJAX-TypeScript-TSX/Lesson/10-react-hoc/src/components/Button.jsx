import React from 'react'
import { bgWrapper } from '../hoc/bgWrapper'

const Button = () => {
  return (
    <button onClick={() => alert('Hello, world!')}>Click me!</button>
  )
}

export default bgWrapper(Button)