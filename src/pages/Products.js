import React, { useState } from 'react'
import '../css/Products.css'
const Products = () => {
  const [FontSize , setFontSize] = useState(16);
  return (
    <>
    <div onClick={ () =>{
      setFontSize(prev => prev + 16)
    }} style={{
fontSize : FontSize,
cursor:'pointer'
    }}>
        This is Products Page
    </div>
    <div 
     className = " jay jay1">
        This is Products Page
    </div>

    </>
  
  )
}

export default Products;