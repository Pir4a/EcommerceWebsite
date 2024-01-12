import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSNACKS } from '../../components/Products'

function Nutrimuscle() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSNACKS.map((product)=> <Product data={product} key={product.id}/>).slice(4,5)}
            <div className='wheytextcontainer'>
            <h1>Barre Protéinée Nutrimuscle</h1>
            <p>Barre protéinée nutrimuscle, haute teneur en protéine donc gg a elle.</p>
            </div>

        </div>
    </div>
  )
}
export default Nutrimuscle