
import React from 'react'
import { useState , useEffect } from 'react';
import {  Outlet } from 'react-router-dom'

import { NavLink } from 'react-router-dom'
export default function Layout() {

    // const [search ,setsearch] = useState('');

    // useEffect(() =>{

    //     const fetchData= async (req,res)=>{

    //         const path = req.query.name;

    //       try{
    //         const res = await fetch('http://localhost:8080/search');

    //         const result = await res.json();
    //         setData(result);
    //       }catch(error){
    //         console.error('Error fetching data ' ,error);
    //       }
    //     };
    //     fetchData();
    //   }, []);

  return (
    <>
        <nav className="flex justify-between m-4">
            <h3 className='text-xl'>
            <NavLink to="/">Voting Project </NavLink></h3>

            <div >
                <ul className="flex items-center items-align ">
                  
                <h3 className='bg-[#1A8B9C]  rounded-lg p-1 text-white'><NavLink to="/Top">Top Participant </NavLink></h3>

                  
                </ul>
            </div>
        </nav>

        <Outlet/>
        </>
  )
}
