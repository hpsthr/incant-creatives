import React from 'react';
import classes from './Button.module.css'
import {motion} from "framer-motion"
import {CgArrowLongRight} from 'react-icons/cg'

const spanMotion1 = {
    rest: {
      scaleX:0,
      
      originX:0,
      
      transition: {
          
        duration:0.23, 
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      scaleX: 1,
      
      transition: {
        delay:0.27,
        duration: 0.2,
        type: "tween",
        ease: "easeOut"
      }
    }
  };
  
  const spanMotion2 = {
    rest: { 
        x:-40,
        transition: {
            
         duration: 0.2,
         type: "tween",
         ease: "easeIn",}
         },
    hover: {
      x:0,
      transition: {
        delay:0.3,
        duration: 0.2,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

  
  const spanMotion3 = {
    rest: { 
        x:-40,
        scaleX:1,
        
        transition: {
         duration: 0.2,
         type: "tween",
        ease: "easeIn",
    }
         },
    hover: {
    originX:0,
      x:0,
    
      scaleX:0,
      transition: {x:{delay: 0.3},
        duration: 0.3,
        type: "tween",
        ease:"easeOut"
        
      }
    }
  };

const ButtonArrow = (props) => {


    return(
        
            <motion.button 
            className = {classes.Button}
            initial="rest" whileHover="hover" animate="rest" 
            onClick = {props.click}> 
            <motion.span
           
            variants = {spanMotion1}
            >
              <CgArrowLongRight style= {{position:"relative" , top:1}} color = "red" fontSize = {25} />
            </motion.span>


            <motion.span
           
            variants = {spanMotion2}
            >Send Us inquiry</motion.span>
            <motion.span
           
            variants = {spanMotion3}
            >
            <CgArrowLongRight style= {{position:"relative" , top:1}} color = "white" fontSize = {25} />
              
            </motion.span>
            </motion.button>
        
    )
}

export default ButtonArrow;