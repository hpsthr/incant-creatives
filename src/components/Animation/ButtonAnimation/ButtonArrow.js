import React from 'react';
import classes from './Button.module.css'
import {motion} from "framer-motion"


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
            style = {{border: "3px solid white"}}
            variants = {spanMotion1}
            >
              <motion.div ></motion.div>
            </motion.span>


            <motion.span
            style = {{border: "3px solid white"}}
            variants = {spanMotion2}
            >Send Us inquiry</motion.span>
            <motion.span
            style = {{border: "3px solid white"}}
            variants = {spanMotion3}
            ></motion.span>
            </motion.button>
        
    )
}

export default ButtonArrow;