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
       <div className="user-home-container" style={{height:'50vw', overflowY:'scroll'}}>
       <UserContainer/>
       </div>
       </div>
    </div>
  )
}

export default Home