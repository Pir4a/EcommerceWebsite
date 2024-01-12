import React from 'react'
import "./newsletter.css"

function Newsletter() {
  return (
    <div className="newslettercontainer">
        <label htmlFor="textform" className='formcontainer'>
         <h1 className="newh">Newsletter</h1>
         <input type='text' className='textform' placeholder='your@email.com'></input>
         <button className='btn' id="subbtn">Subscribe</button>    
        </label>
    </div>
  )
}

export default Newsletter