import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../context/shop-context";



export const Product = (props) => {
    const {id, name, price, image } = props.data;
    const { addToCart, cartItems }=useContext(ShopContext);

    const cartItemAmount=cartItems[id];

    return <div className="products">
        <img src={image}/>
        <div className="description">
            <p><b>{name}</b></p>
            <p>Ksh. {price}</p>
        </div>
        <button className="addToCartBttn" onClick={()=> addToCart(id)}>
            Add to Cart {cartItemAmount>0 && <>({cartItemAmount})</>}</button>
    </div> 
}