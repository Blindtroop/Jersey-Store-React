import { createContext, useEffect, useState } from 'react'
import { PRODUCTS } from '../products'

export const ShopContext= createContext(null)

const getDefaultCart = () => {
  let cart={};
  for (let i=1; i<PRODUCTS.length+1; i++) {
    cart[i]=0;
  }
  return cart;
}

export const ShopContextProvider = (props) => {
  const[cartItems, setCartItems] = useState(getDefaultCart()); //useState is a hook that allows you to have state variables in functional components

  const getTotalCartAmount = () => {
    let totalAmount=0;
    for(const item in cartItems) {
    if (cartItems[item]!==0) {
      let itemInfo=PRODUCTS.find((product) => product.id===Number(item));
      totalAmount+=itemInfo.price*cartItems[item];
    }
    
  }

  return totalAmount;
};

  const addToCart=(id) => {
    setCartItems((prev) => ({...prev,[id]: prev[id]+1}));
  }
  const removeFromCart=(id) => {
    setCartItems((prev) => ({...prev,[id]: prev[id]-1}));
  }

  const updateCartItemCount=(newAmount, Id)=> {
    setCartItems((prev) => ({...prev,[Id]: newAmount}));
  }

  const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount};
  console.log(cartItems);
  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>

  )
}

