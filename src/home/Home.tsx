import React from 'react'
import Navbar from '../Components/Navbar'
import Example from '../Sidebar/Sidebar'
import Sidebar from '../Sidebar/Sidebar'
import { UserContainer } from '../Users/UserContainer'


const Home = () => {
  return (
    <div>
       <Navbar/>
       <div className="main-container">
       <Sidebar/>
       <UserContainer/>
       </div>
    </div>
  )
}

export default Home