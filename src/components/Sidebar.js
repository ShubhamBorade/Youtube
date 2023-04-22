import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    if(!isMenuOpen) return null; // return null when user clicks on thumbnail button(so that the sidebar gets hidden)
                                 // either above if will retun or below return
    return (  
       <div className='relative'>
        <div className='shadow-xl w-44 p-2 fixed top-[48px] bg-gray-50 z-9 h-[600px]'>
           <ul className='mt-1'>
           <li className='hover:bg-gray-100  cursor-pointer'>
           <Link to="/">Home</Link>
           </li> 
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Music</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Shorts</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Subscriptions</li>
          </ul>
        <hr className='mt-2'/>
          <h1 className='font-bold mt-5'>Subscriptions</h1>
          <ul className='mt-1'>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Music</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Gaming</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Movies</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Sports</li>
          </ul>
          <hr className='mt-2'/>
          <h1 className='font-bold mt-4'>Watch Later</h1>
          <ul className='mt-1'>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Music</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Gaming</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Movies</li>
            <li className='my-2 hover:bg-gray-100  cursor-pointer'>Sports</li>
          </ul>
        </div>
        </div> 
    )
}

export default SideBar
