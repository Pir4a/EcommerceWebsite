import React from 'react'
import "./footer.css"


function Footer() {
  return (
  <div className='footer'>
    <div className='fcontainer'>
        <div className='ulcontainer'>
        <ul>
            <li><a href="#main">About</a></li>
            <li><a href="#main">Contact</a> Us</li>
            <li><a href="#main">FAQs</a></li>
            <li><a href="#main">News</a></li>
            <li><a href="#main">Careers</a></li>
        </ul>
        </div>
        <p>Designed by StephCode</p>
    </div>
  </div>
  )
}

export default Footer