import React from 'react'
import "../pages/home.css"
import "./rippedcard.css"



function Rippedcard() {
  return (
    <div className='ripped'>
        <div className='imgcontainer'>
        <img  className="fitness" src="https://www.fitnessstory.fr/wp-content/uploads/2019/12/fitness-ou-musculation.jpg" alt="fitnessimage"></img>
       
        <div className='text'>
           <h1 className='shape'>Get in shape now.</h1>
           <p className='parabuy'>Buy the best nutritions supplements.</p>
           <p className='second'>Become the best version of yourself.</p>
           <button className="btnblack" onClick={()=>window.scrollTo(3,3)}>SHOP NOW</button>
           </div>
        </div>
    </div>
  )
}

export default Rippedcard