import React from 'react';
 import './Head.css';
 import logo from '../../images/Logo.svg';

const Head = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
          <div>
          
            <a href="/shop">Shop</a>
            <a href="/order">Order</a>
            <a href="/inventory">Inventory</a>
            <a href="/login">Login</a>
          </div>
            
        </div>
    );
};

export default Head;