import React, { createContext } from 'react'
import { useState } from 'react';
import { PRODUCTSPROTEIN, PRODUCTSSNACKS, PRODUCTSSUPPS } from '../components/Products';

export const ShopContext = createContext(null);

 const getDefaultCart = ()=> {
  let cart = {};
  for ( let i = 0; i < PRODUCTSPROTEIN.length+PRODUCTSSNACKS.length+PRODUCTSSUPPS.length +1; i++ ){
    cart[i] = 0;
  }
  return cart;
 }


export const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart())

    const getTotalCartAmount = () => {
      let totalAmount = 0;
      for (const item in cartItems){
        if (cartItems[item]>0){
          let itemInfo = PRODUCTSPROTEIN.find((product)=> product.id ===Number(item)) + PRODUCTSSNACKS.find((product)=> product.id ===Number(item)) + PRODUCTSSUPPS.find((product)=> product.id ===Number(item));


          totalAmount += cartItems[item] * itemInfo.price

        }
      }
      return totalAmount;
    }

    const addToCart = (itemId) => {
      setCartItems((prev) =>({...prev, [itemId]: prev[itemId] +1}))
    }
    const removeFromCart = (itemId) => {
      setCartItems((prev) =>({...prev, [itemId]: prev[itemId] -1}))
    }

    const updateCartItemCount = (newAmount, itemId)=> {
      setCartItems((prev)=>({...prev, [itemId]: newAmount}))
    }

    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount}

  return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}

