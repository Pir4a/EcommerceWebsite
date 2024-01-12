import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSUPPS } from '../../components/Products'

function Omegatrois() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSUPPS.map((product)=> <Product data={product} key={product.id}/>).slice(0,1)}
            <div className='wheytextcontainer'>
            <h1>Omega 3, haute puissance</h1>
            <p>Gelules concentrées en omega3, forte teneur en DHA et EPA pour un systeme cardiovasculaire renforcé.</p>
            </div>

        </div>
    </div>
  )
}
export default Omegatrois