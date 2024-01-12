import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSPROTEIN } from '../../components/Products'

function Wheyprotein() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSPROTEIN.map((product)=> <Product data={product} key={product.id}/>).slice(0,1)}
            <div className='wheytextcontainer'>
            <h1>Gold Standard WHEY</h1>
            <p>La meilleure whey pour les athletes les plus performants.</p>
            </div>

        </div>
    </div>
  )
}

export default Wheyprotein