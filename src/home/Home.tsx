import React from 'react'
import Navbar from '../Components/Navbar'
import '../../src/styles/media.scss'
import Sidebar from '../Sidebar/Sidebar'
import { UserContainer } from '../Users/UserContainer'
import {motion} from 'framer-motion'

const Home = () => {
  return (
    <motion.div
    className="box"
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 1,
      delay: 0.2,
      ease: [0, 0.71, 0.2, 1.01],
    }}
      >
          <div>
       <Navbar/>
       <div className="main-container">
       <Sidebar/>
       <div className="user-home-container" >
       <UserContainer/>
       </div>
       </div>
    </div>
      </motion.div>
  
  )
}

export default Home