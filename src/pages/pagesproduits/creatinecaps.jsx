import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSUPPS } from '../../components/Products'

function Creatinecaps() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSUPPS.map((product)=> <Product data={product}/>).slice(2,3)}
            <div className='wheytextcontainer'>
            <h1>Creatine 90 caps | 1g / capsule </h1>
            <p>Comprimés de créatine pour augmenter la performance chez les sportifs.</p>
            </div>

        </div>
    </div>
  )
}
export default Creatinecaps