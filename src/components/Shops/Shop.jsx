import React, { useEffect, useState } from "react";
import Product from "../Products/Product";

import "./Shop.css";

const Shop = () => {
    
  const [products, setProducts] = useState([]);
  const [cart, setCart] =useState([])
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    
  }, [ ]);
  const handleAddToCart =(product) =>{
    // console.log(product)
       const newChart =[...cart, product];
       setCart(newChart);
}
  return (
    <div className="shop-container">
      <div className="product-container">
         {
            products.map(product => <Product
            key={product.id}
            handleAddToCart={handleAddToCart}
            product = {product}
            
            
            
            ></Product>)
         }
      </div>
      <div className="card-container">
        <h2> ORDER SUMMARY</h2>
       <h4>Selected item:{cart.length}</h4>
      </div>
    </div>
  );
};

export default Shop;
