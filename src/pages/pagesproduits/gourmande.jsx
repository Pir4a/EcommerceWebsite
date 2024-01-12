import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSNACKS } from '../../components/Products'

function Gourmande() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSNACKS.map((product)=> <Product data={product}/>).slice(1,2)}
            <div className='wheytextcontainer'>
            <h1>Barre Protéinée Gourmande</h1>
            <p>Barre protéinée au chocolat onctueux et terriblement gourmand 🤤🤤🤤.</p>
            </div>

        </div>
    </div>
  )
}
export default Gourmande