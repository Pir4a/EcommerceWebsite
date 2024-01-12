import React from 'react'
import "./wheyprotein.css"
import "../../components/Addtocartbtn.css"
import { Product } from '../products'
import { PRODUCTSSUPPS } from '../../components/Products'

function Multivit() {
  return (
    <div>
        <div className="productcontainer">
        {PRODUCTSSUPPS.map((product)=> <Product data={product} key={product.id}/>).slice(1,2)}
            <div className='wheytextcontainer'>
            <h1>Multivitamines 90 caps</h1>
            <p>Comprimés multivitaminés pour tous vos besoins en vitamines et minéraux.</p>
            </div>

        </div>
    </div>
  )
}
export default Multivit