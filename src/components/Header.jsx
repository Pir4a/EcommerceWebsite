import React from 'react'
import "./header.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../pages/Home.jsx'

function Header() {

  return (
    <div> 
      <header className='header'>
        <nav className='navbar'>
            <Link to="/"><img src="https://www.dynamicmarketing.eu/wp-content/uploads/2018/06/ecommerce.logo_.png" className='logo' alt="logo"/></Link>
            <div className='right-container'>
                <ul className="supplements">
                   <li   className="supp proteins"><Link to="/whey">Protéines</Link>
                   </li>
                   <li  className="supp nutrition"><Link to="/nutrition">Nutrition</Link>               
                  </li> 
                   <li className="supp clothes"><Link to="/vetements">Vetements</Link>
                   </li>
                   <li  className="supp bars"><Link to="/snacks">Barres & Encas</Link></li>
                   <li  className="supp cart"><Link to="/cart"><span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHB8PUUcwu0znerxeTjKi2FrZA3ebxN0SEvhzIF4ocYw&s" className="cartimg"/></span></Link></li>
                </ul>

            </div>
        </nav>
      </header>
    </div>
  )
}



export default Header