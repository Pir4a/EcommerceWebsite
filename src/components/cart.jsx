import React from 'react'
import { PRODUCTSPROTEIN, PRODUCTSSUPPS, PRODUCTSSNACKS } from './Products'
import { useContext } from 'react'
import { ShopContext } from '../context/shopcontext'
import CartItem from './cartitem'
import "./cart.css"

function Cart() {
    const {cartItems, getTotalCartAmount} = useContext(ShopContext)
    const totalAmount = getTotalCartAmount()
  return (
    <div className='carts'>cart
        <div>
            <h1>Articles dans le panier : </h1>
        </div>
        <div className="cartItems">
            {PRODUCTSPROTEIN.map((Product)=> {
                if (cartItems[Product.id] !==0){
                    return <CartItem data={Product} key={Product.id}/>
                }
            })}
             {PRODUCTSSNACKS.map((Product)=> {
                if (cartItems[Product.id] !==0){
                    return <CartItem data={Product} key={Product.id}/>
                }
            })}
             {PRODUCTSSUPPS.map((Product)=> {
                if (cartItems[Product.id] !==0){
                    return <CartItem data={Product} key={Product.id}/>
                }
            })}

            <div className='checkout'>
                <p>Total : ${totalAmount}</p>
                <button>Continue Shopping</button>
                <button>Checkout</button>

            </div>

        </div>
    
    </div>
  )
}

export default Cart