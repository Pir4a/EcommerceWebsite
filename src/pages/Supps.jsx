import React from 'react'
import { PRODUCTSSUPPS } from '../components/Products'
import { Product } from './products'
import "./whey.css"

function Supps() {
  return (
    <div>
      <div className="wheycontainer">
        <div className="wheytxt">
          <h1>Des compléments pour vivre longtemps & en excellente forme physique : </h1>
        </div>
        <div className="wheygrid"></div>
      <div className='products'> {PRODUCTSSUPPS.map((product)=> <Product data={product}/>)}</div>
      </div>
      </div>
  )
}

export default Supps