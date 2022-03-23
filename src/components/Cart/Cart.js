import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan,faArrowRight } from '@fortawesome/free-solid-svg-icons';
const Cart = () => {
    return (
        <div className='cart'>
            <p className='cart-heading'>Order Summary</p>
            <p>Selected Items: </p>
            <p>Total Price: </p>
            <p>Total Shipping Charge: </p>
            <p>Tax: </p>
            <p className='grand-total'>Grand Total: </p>
            <button className='clear-btn'>Clear Cart <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></span></button>
            <br />
            <button className='review-btn'>Review Order <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Cart;