
import React, {useContext} from 'react';
import classes from '../../Portfolio.module.css'
import ContextProp from '../../../../../context/ContextProp';
import ContextI from '../../../../../ScrollSection/FullpageContext'
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
    const {goto, slides}  = useContext(ContextI)
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
    onClick =  {() => goto(slides[2]) }
    initial="rest" whileHover="hover" animate="rest" 
    className = {classes.FirstBlock}>
        
        <motion.span><Imgpro img = {first1}/></motion.span>
        <motion.span><Imgpro img = {first2}/></motion.span>
        <motion.span><Imgpro img = {first3}/></motion.span>
        <motion.span><Imgpro img = {first3}/></motion.span>
        <motion.drop
        variants = {spanMotion1}
        className = {classes.DropBox1}
        >
            <h1>
                Indian Body Care
            </h1>
        </motion.drop>


    </motion.div>


    <motion.div
    onClick =  {() => goto(slides[1]) }
    initial="rest" whileHover="hover" animate="rest"
    >
    <Imgpro img = {two1}/>
    <motion.drop
        variants = {spanMotion1}
        className = {classes.DropBox2}
        >
            <h1>
                Infiriry
            </h1>
        </motion.drop>
    </motion.div>



    <motion.div
    onClick =  {() => goto(slides[3]) }
    initial="rest" whileHover="hover" animate="rest"
     className = {classes.SecondBox}>
        <span><Imgpro img = {three1}/></span>
        <span><Imgpro img = {three1}/></span>
        <motion.drop
        variants = {spanMotion1}
        className = {classes.DropBox3}
        >
            <h1>
                Araki Hotels
            </h1>
        </motion.drop>

        
    </motion.div>

    <motion.div 
    initial="rest" whileHover="hover" animate="rest"
    className ={classes.ThirdBox}>
        <span><Imgpro img = {four1}/></span>
        <span><Imgpro img = {four1}/></span>
        <motion.drop
        variants = {spanMotion1}
        className = {classes.DropBox4}
        >
            <h1>
                Product Design
            </h1>
        </motion.drop>
    </motion.div>
    
    <div className = {classes.Text}>
        <Text text = "Portfolio" number = {0}/>
    
    </div>
    </div>
    
    
    </Aux>
)
}

export default PortfolioInfo;