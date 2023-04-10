import React from 'react'
import {useSelector} from "react-redux"
import { Link } from 'react-router-dom';

const SideBar = () => {

    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    if(!isMenuOpen) return null;
    
    return (
        <div className='shadow-xl w-44 p-2'>
           <ul className='mt-1'>
           <li>
           <Link to="/">Home</Link>
           </li> 
            <li>Music</li>
            <li>Shorts</li>
            <li>Subscriptions</li>
          </ul>
          <h1 className='font-bold mt-5'>Subscriptions</h1>
          <ul className='mt-1'>
            <li>Music</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Sports</li>
          </ul>

          <h1 className='font-bold mt-4'>Watch Later</h1>
          <ul className='mt-1'>
            <li>Music</li>
            <li>Gaming</li>
            <li>Movies</li>
            <li>Sports</li>
          </ul>
        </div>
    )
}

export default SideBar
