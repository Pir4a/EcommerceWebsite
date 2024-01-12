import React from 'react'
import { PRODUCTSSNACKS } from '../components/Products'
import { Product } from './products'
import "./snacks.css"

function Snacks() {
  return (
    <div>
        <div>
      <div className="barrecontainer">
        <div className="barretxt">
          <h1>Des encas protéinés succulents :  </h1>
        </div>
        <div className="barregrid">
        <div className='products'> {PRODUCTSSNACKS.map((product)=> <Product data={product}/>)}</div>
        </div>
      </div>
    </div>


    </div>
  )
}

export default Snacks