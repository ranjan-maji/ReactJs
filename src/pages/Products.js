import React, { useState } from 'react'
import '../css/Products.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Products = () => {
  const [FontSize, setFontSize] = useState(16);
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
      <div class="containeritem">





        <div class="containerproduct item-1">

          <div class="contanercircle ">
            <div class="circlegol"></div>

          </div>
        </div>


        <div class="containerproduct item-2">

          <div class="contanercircle ">
            <div class="circlegol"></div>

          </div>
        </div>


        <div class="containerproduct item-3">

          <div class="contanercircle ">
            <div class="circlegol"></div>

          </div>
        </div>

      


      </div>
      <div class= "desc">
        <h5>React and Node.js are both open-source JavaScript libraries that are used to build user interfaces and server-side applications, respectively. Both are the most popular technologies in the world of front-end web development today, but they’re quite different.</h5>
        
      </div>

    </>

  )
}

export default Products;