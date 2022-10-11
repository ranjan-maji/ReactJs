import React from 'react'
import { useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();

  console.log("location", location.state)
  return (
    <div>
    
       This is Cart Page  { location?.state?.data} { location?.state?.count}

    </div>
  )
}

export default Cart;