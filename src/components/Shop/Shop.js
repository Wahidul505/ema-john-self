import React, { useEffect, useState } from 'react';
import { getStoredCart, removeAllDb, setToDb } from '../../utilities/localStorageDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    // useEffect for getting all data from json file 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    // function for adding product into cart while clicking add to cart 
    const addToCart = (product)=>{
        let newCart;
        // increasing the clicked product quantity 
        const exist = cart.find(element => element.id === product.id);
        if(!exist){
            product.quantity = 1;
            newCart = [...cart,product];
        }
        else{
            const rest = cart.filter(element => element.id !== product.id);
            product.quantity = product.quantity + 1;
            newCart = [...rest,product];
        }
        setCart(newCart);
        setToDb(product.id)
    }
    // useEffect for getting data from local storage to add to cart
    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            if(products){
                const storedProduct = products.find(element=> element.id === id);
                if(storedProduct){
                    // increasing the local storage stored product quantity 
                    const quantity = storedCart[id];
                    storedProduct.quantity = storedProduct.quantity + quantity;
                    savedCart.push(storedProduct);
                }
            }
        }
        setCart(savedCart)
    },[products])
    // function for clearing cart 
    const clearCart = ()=>{
        const emptyCart = [];
        setCart(emptyCart);
        removeAllDb();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}></Cart>
            </div>
        </div>
    );
};

export default Shop;