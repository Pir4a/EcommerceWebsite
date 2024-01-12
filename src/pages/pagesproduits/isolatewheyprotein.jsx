import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSPROTEIN } from '../../components/Products'

function Wheyproteinisolate() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSPROTEIN.map((product)=> <Product data={product} key={product.id}/>).slice(1,2)}
            <div className='wheytextcontainer'>
            <h1>Gold Standard Whey Protein Isolate</h1>
            <p>Le meilleur isolat de whey pour les athletes les plus performants.</p>
            </div>

        </div>
    </div>
  )
}
export default Wheyproteinisolate