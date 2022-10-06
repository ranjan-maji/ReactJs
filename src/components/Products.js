import Product from './Product';
import { useState } from 'react';


const Products = () => {
const [product, setProducts] = useState([]);




  return (
    <div style={{padding:30}} className="container mx-auto pb-24">

        <h1 className="text-lg font-bold my-8">Products</h1>
        <div className="grid grid-cols-5 my-8 gap-24">

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />



          



        </div>

    </div>
  )
}

export default Products