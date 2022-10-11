import React, { useState } from 'react'
import '../css/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Products = () => {
  const [FontSize , setFontSize] = useState(16);
  return (
    <>
    {/* <div onClick={ () =>{
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
    </div> */}
    <div class="d-flex justify-content-center">
    <div class="p-2">Flex item 1</div>
     <div class="p-2">Flex item 2</div>
     <div class="p-2">Flex item 3</div>
    </div>

    </>
  
  )
}

export default Products;