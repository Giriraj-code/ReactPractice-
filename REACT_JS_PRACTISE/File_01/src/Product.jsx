import React from 'react'
import { useState } from 'react'

import Welcome from './Welcome'
const Product = ({name,price}) => {
    const [quantity, setQuantity] = useState(1)
  return (
    <div>
        <h2>{name}</h2>
        <p>price: ${price}</p>
        <button onClick={()=>{
            setQuantity(quantity+1)
        }}>Qty: {quantity}</button>
    </div>
  )
}

export default Product