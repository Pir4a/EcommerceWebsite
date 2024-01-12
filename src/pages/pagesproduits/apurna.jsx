import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSNACKS } from '../../components/Products'

function Apurnabar() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSNACKS.map((product)=> <Product data={product}  key={product.id}/>).slice(0,1)}
            <div className='wheytextcontainer'>
            <h1>Barre Protéinée Apurna</h1>
            <p>Un délice a la teneur exeptionelle de 35% en protéine.</p>
            </div>

        </div>
    </div>
  )
}
export default Apurnabar