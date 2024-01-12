import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSPROTEIN } from '../../components/Products'

function Wheyproteinvegan() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSPROTEIN.map((product)=> <Product data={product}/>).slice(2,3)}
            <div className='wheytextcontainer'>
            <h1>Gold Standard WHEY</h1>
            <p>La meilleure whey pour les athletes les plus performants.</p>
            </div>

        </div>
    </div>
  )
}

export default Wheyproteinvegan