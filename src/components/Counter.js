import React, { useState } from 'react'

const Counter = (props) => {
    const [number, setNumber] = useState(props.number);
  return (
    <div>
      <button value={number} onClick={()=> setNumber(number - 1)} disabled={number === 0 ? 'disabled' : '' }>{number}</button>
    </div>
  )
}

export default Counter
