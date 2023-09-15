import React,{ReactNode} from 'react'
import { motion } from 'framer-motion'



export  const  Transition=(Component:any)=>{
    return(
        <motion.div
        animate={{ x: 100 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        {Component}
      </motion.div>
    )
}