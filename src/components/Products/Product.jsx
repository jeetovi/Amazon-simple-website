import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
   
    const {id, name,seller,quantity,ratings ,img, price} = props.product;
   const handleAddToCart = props.handleAddToCart;

    return (
        <div className='product'>
          <img src={img} alt="" />
          <div className='product-info'>
          <h6 className='product-name'>{name}</h6>
          <p>Price:${price}</p>
          <p>Manufacture:{seller}</p>
          <p>Rating:{ratings}</p>
          </div>
            <button onClick={() => 
                handleAddToCart(props.product)} 
                className='btn-chart'>
                  Add to cart " " <FontAwesomeIcon icon={faShoppingCart} />

                    </button>
        </div>
    );
};

export default Product;