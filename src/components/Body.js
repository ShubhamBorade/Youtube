import React from 'react'
import SideBar from './Sidebar'
import MainContainer from './MainContainer'
import WatchPage from './WatchPage'
import { Outlet } from 'react-router-dom'


const Body = () => {
    return (
            <div className='flex top-[70px]'>
                <SideBar/>
                <Outlet/>
            </div>
    )
}

export default Body
