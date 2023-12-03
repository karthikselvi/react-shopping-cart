import React from 'react'
import './nav.css'

function Navubar({size}) {
  return (
    <nav>
        <div className='nav_box'>
            <span className='myshop'>
                <div className='head'>
                    <p>home</p>
                    <p>about</p>
                    <p>shop</p>
                </div>
                
                </span>
                <div className="cart">
                    <span>
                        <i className='fas fa-cart-plus'></i>
                    </span> 
                    <span>{size}</span>
                </div>

        </div>
    </nav>
  )
}

export default Navubar