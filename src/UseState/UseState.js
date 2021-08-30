import React, { useState } from 'react'
import '../UseState/UseState.css'

function UseState() {
  const [input, output] = useState(0)

  const increase = () => {
    // console.log('Clicked')
    output(input + 1)
  }
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>{input}</h1>
      <button
        onClick={increase}
        style={{
          color: 'white',
          background: 'green',
          textAlign: 'center',
          justifyContent: 'center',
          textAlignLast: 'center',
          display: 'flex',
        }}
      >
        Click Me
      </button>
    </div>
  )
}

export default UseState
