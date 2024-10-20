import React, { useState } from 'react';

import ProductDate from './ProductDate';
import './ProductItem.css';

const ProductItem = (props) =>{

    const [title,setTitle] = useState(props.title);

    function clickHandler(){
        setTitle("Added");
        console.log('button clicked');
    }


    return(
        <div className='productItem'>
            <ProductDate date = {props.date}></ProductDate>
            <div className='product-item-description'>
              <h2>{title}</h2>
            </div>
            <button  onClick={clickHandler}>Add to Cart</button>
            
        </div>
    );
}

export default ProductItem ;