import React, { useEffect, useState } from "react";
import "./Shop.css";

const Shop = () => {
    
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => setProducts(data))
    
  }, [ ]);
  return (
    <div className="shop-container">
      <div className="product-container">
        <h3>Product comminggg ={products.length}</h3>
      </div>
      <div className="card-container">
        <h4>Card comming</h4>
      </div>
    </div>
  );
};

export default Shop;
