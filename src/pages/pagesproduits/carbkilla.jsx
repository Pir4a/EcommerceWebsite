import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSNACKS } from '../../components/Products'

function Carbkilla() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSNACKS.map((product)=> <Product data={product}/>).slice(2,3)}
            <div className='wheytextcontainer'>
            <h1>Barre Protéinée Carb killa</h1>
            <p>Barre protéinée a faible teneur en glucides.</p>
            </div>

        </div>
    </div>
  )
}
export default Carbkilla