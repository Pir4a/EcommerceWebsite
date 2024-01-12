import React from 'react'
import { PRODUCTSPROTEIN } from '../components/Products'
import { Product } from './products'
import "./whey.css"

function Whey() {
  return (
    <div>
      <div className="wheycontainer">
        <div className="wheytxt">
          <h1>Nos meilleures protéines laitière : </h1>
        </div>
        <div className="wheygrid">
        <div className='products'> {PRODUCTSPROTEIN.map((product)=> <Product data={product} key={product.id}/>)}</div>
        </div>
      </div>
    </div>
  )
}

export default Whey