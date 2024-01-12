import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSPROTEIN } from '../../components/Products'

function Casein() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSPROTEIN.map((product)=> <Product data={product}  key={product.id}/>).slice(3,4)}
            <div className='wheytextcontainer'>
            <h1>Gold Standard CASEIN</h1>
            <p>La meilleure caséine pour les athletes les plus performants.</p>
            </div>

        </div>
    </div>
  )
}
export default Casein