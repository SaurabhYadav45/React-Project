import { useState } from 'react';
import './ProductForm.css';


const ProductForm = (props) =>{

    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState(''); 

    function titleChangeHandler(event){
        setTitle(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        const productData = {
            title:newTitle,
            date:newDate
        };

        props.onSaveProduct(productData);

        setTitle('');
        setDate('');
    }
    return(
        <form onSubmit={submitHandler}>
            <div className='new-product-controls'>
                <div className='new-product-control'>
                   <label>Title</label>
                   <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-product-control'>
                    <label>Date</label>
                    <input type='date' value={newDate} onChange={dateChangeHandler} min='2023-01-01' max='2023-12-12'></input>
                </div>
                <div className='new-product-button'>
                    <button type='submit'>Add Product</button>
                </div>
            </div>
            
        </form>
    );
}

export default ProductForm;