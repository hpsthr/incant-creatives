
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
    <div className = {classes.FirstBlock}>
        <span><Imgpro img = {first1}/></span>
        <span><Imgpro img = {first2}/></span>
        <span><Imgpro img = {first3}/></span>
        <span><Imgpro img = {first3}/></span>
    </div>
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