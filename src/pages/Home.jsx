import React from 'react'
import "./home.css"
import { Link } from 'react-router-dom'
import { PRODUCTSPROTEIN, PRODUCTSSNACKS } from '../components/Products'
import { PRODUCTSSUPPS } from '../components/Products'
import {Product} from './products'
import Rippedcard from '../components/rippedcard'




function Home() {
  return (
    <div className='main' id="main">
     <div className='grid'>
         <div className='imgwhey'>
          <Link to="/whey">
              <img src="https://www.toutelanutrition.com/media/cache/terravita_blog_article_thumbnail_medium/blog/wikifit-nutrition-complements-a-quoi-sert-la-whey-proteine.jpg"
               alt="wheyprotein"/>
               <p id="prot">Protéine Whey</p>
          </Link>
         </div>
         <div className='imgomega'>
          <Link to="/whey">
              <img src="https://img.passeportsante.net/1200x675/2021-05-03/i105273-acides-gras-omega3-dha-nu.webp"
               alt="supps"/>
               <p id="sante">Santé</p>
          </Link>
         </div>
         <div className='imgsnacks'>
          <Link to="/whey">
              <img src="https://touteslesbox.fr/wp-content/uploads/2021/10/barre-proteinee-02-768x512.jpg"
               alt="snacks"/>
               <p id="snacks">Snacks</p>
          </Link>
         </div>

     </div>
     <div className="bs-container">
        <div className="best-sellers"><h1>Nos meilleures ventes : </h1> 
          <div className='products'> {PRODUCTSPROTEIN.map((product)=> <Product data={product}/>).slice(0,2)} {PRODUCTSSUPPS.map((product)=> <Product data={product}/>).slice(0,2)}</div>
       </div>  
     </div>
     <Rippedcard />
    
     
    </div>
  )
}

export default Home
