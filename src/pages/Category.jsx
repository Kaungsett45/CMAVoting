import React from 'react'
import '../index.css'

import { Outlet ,NavLink } from 'react-router-dom'
export default function Category() {
  return (
   <>
            <div>
                
                <h2 className='text-lg text-center'>Category</h2>
           
            <div className='img-container'>
            
                <div className='containing'>
                <NavLink to="/King"> 
                    <img src="https://i.postimg.cc/vZsVTB5L/King.jpg" alt="" />
                 </NavLink>
                </div>
           
                <div className='containing'>
                <NavLink to="/Queen">
            
                    <img src="https://i.postimg.cc/pLJnFHZN/Queen.jpg" alt="" />
                    
                </NavLink>
                </div>
            </div>
            </div>
    </>
  )
}
