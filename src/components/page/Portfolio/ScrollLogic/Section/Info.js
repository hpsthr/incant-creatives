
import React, {useContext} from 'react';
import classes from '../../Portfolio.module.css'
import ContextProp from '../../../../../context/ContextProp';
import {motion} from 'framer-motion'
import { transitionLine } from '../../../../Animation/Motion';
import Aux from '../../../../../hoc/Auxillary'
import Text from '../../../../Animation/TextAnimation/Text'
import Imgpro from './Imgpro';

import first1 from '../../../../../Resources/Portfolio/Images/first1.jpg'
import first2 from '../../../../../Resources/Portfolio/Images/first2.png'
import first3 from '../../../../../Resources/Portfolio/Images/first3.png'

import two1 from '../../../../../Resources/Portfolio/Images/AsstOne.png'

import three1 from '../../../../../Resources/Portfolio/Images/three1.png'
import four1 from '../../../../../Resources/Portfolio/Images/four1.jpg'

const spanMotion1 = {
    rest: {
      opacity:0,
      
      transition: {
          
        duration:0.3, 
        type: "tween",
        ease: "easeIn"
      }
    },
    hover: {
      opacity:0.7,
      
      transition: {
        
        duration: 0.3,
        type: "tween",
        ease: "easeOut"
      }
    }
  };

const PortfolioInfo = () => {

    const {number} = useContext(ContextProp)
return( 
    <Aux>
    
        <motion.div
initial= "init"
animate = {number === 0 ? "animation" : "init"}
variants = {transitionLine}
transition = {{
    delay:0.2,
    duration:0.6,
    type:"tween",
    }}
className = {classes.LineBox}></motion.div>
<div className = {classes.PortBox}>
    <motion.div
    initial="rest" whileHover="hover" animate="rest" 
    className = {classes.FirstBlock}>
        
        <motion.span><Imgpro img = {first1}/></motion.span>
        <motion.span><Imgpro img = {first2}/></motion.span>
        <motion.span><Imgpro img = {first3}/></motion.span>
        <motion.span><Imgpro img = {first3}/></motion.span>
        <motion.drop
        variants = {spanMotion1}
        className = {classes.DropBox}
        >
            <h1>
                Indian Body Care
            </h1>
        </motion.drop>
    </motion.div>
    <div><Imgpro img = {two1}/></div>
    <div className = {classes.SecondBox}>
        <span><Imgpro img = {three1}/></span>
        <span><Imgpro img = {three1}/></span>

        
    </div>
    <div className ={classes.ThirdBox}>
        <span><Imgpro img = {four1}/></span>
        <span><Imgpro img = {four1}/></span>
    </div>
    
    <div className = {classes.Text}>
        <Text text = "Portfolio" number = {0}/>
    
    </div>
    </div>
    
    
    </Aux>
)
}

export default PortfolioInfo;