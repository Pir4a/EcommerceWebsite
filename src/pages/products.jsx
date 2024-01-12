import React, { useContext } from "react";
import { PRODUCTSPROTEIN } from "../components/Products";
import { Link } from "react-router-dom";
import "./products.css"
import { ShopContext } from "../context/shopcontext.jsx";
import "../components/Addtocartbtn.css"



export const Product = (props) => {
    const {id, productName, price, productImage, link} = props.data
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemsAmount = cartItems[id]

        

    return <div className="product" key={id}>
        <Link to ={`/${link}`}>
        <img src={productImage}/> </Link>
        <div className="description">
            <p id="productp">{productName}</p>
            <p> ${price} </p>
        </div>
        <div className="cartbtn">
        <button className='addToCartBttn' onClick={()=> addToCart(id)}>ACHETER {cartItemsAmount > 0 && <> ({cartItemsAmount})</>}</button>
        </div>
       
        </div>
}