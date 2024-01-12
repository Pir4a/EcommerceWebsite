import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSNACKS } from '../../components/Products'

function Mars() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSNACKS.map((product)=> <Product data={product} key={product.id}/>).slice(3,4)}
            <div className='wheytextcontainer'>
            <h1>Barre Protéinée Mars</h1>
            <p>Barre protéinée au chocolat, version mars !.</p>
            </div>

        </div>
    </div>
  )
}
export default Mars