import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSUPPS } from '../../components/Products'

function Caffein() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSUPPS.map((product)=> <Product data={product}  key={product.id}/>).slice(3,4)}
            <div className='wheytextcontainer'>
            <h1>Caffeine 60 caps | 100mg/caps</h1>
            <p>Comprimé de cafféine pour une augmentation de la concentration et du niveau d'énergie.</p>
            </div>

        </div>
    </div>
  )
}
export default Caffein