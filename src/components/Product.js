const Product = ({img = "/images/peproni.png" , name = "Havana special", size ="Small"} ) => {
  return (
    <div>
        <img src={img} alt="pizza" />
        <div className="text-center">
            <h2 className="text-lg font-bold py-2">{name}</h2>
            <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{size}</span>
        </div>
        <div className="flex justify-between item-center mt-4">
            <span>₹ 500</span>
            <button className="bg-yellow-500 py-1 px-4 rounded-full font-bold">ADD</button>
        </div>
    </div>
  )
}

export default Product;