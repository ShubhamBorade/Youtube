import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    if(!isMenuOpen) return null; // return null when user clicks on thumbnail button(so that the sidebar gets hidden)
                                 // either above if will retun or below return
    return (   
        <div className='shadow-xl w-44 p-2'>
           <ul className='mt-1'>
           <li>
           <Link to="/">Home</Link>
           </li> 
            <li className='my-2'>Music</li>
            <li className='my-2'>Shorts</li>
            <li className='my-2'>Subscriptions</li>
          </ul>
        <hr className='mt-2'/>
          <h1 className='font-bold mt-5'>Subscriptions</h1>
          <ul className='mt-1'>
            <li className='my-2'>Music</li>
            <li className='my-2'>Gaming</li>
            <li className='my-2'>Movies</li>
            <li className='my-2'>Sports</li>
          </ul>
          <hr className='mt-2'/>
          <h1 className='font-bold mt-4'>Watch Later</h1>
          <ul className='mt-1'>
            <li className='my-2'>Music</li>
            <li className='my-2'>Gaming</li>
            <li className='my-2'>Movies</li>
            <li className='my-2'>Sports</li>
          </ul>
        </div>
    )
}

export default SideBar
