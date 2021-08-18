import React, {useContext} from 'react';
import FullPage from '../../../ScrollSection/index'
import "../Portfolio/carousel.css"
import ServicePage from './ScrollLogic/SPage'

import Context from '../../../context/ContextProp'
import Carousel from './ImageScript/Slider'
import classes from './Service.module.css'
import {motion} from 'framer-motion'
import transition from '../Transition/TransitionProp'
import {transitionBoxEl} from '../../Animation/Motion'



const Service = (props) => {
    const {valueShow, number} = useContext(Context)


    return(
       <motion.div
       name = "service"
       initial = "initial"
       animate ="in"
       exit = "out"
       variants = {transition}
       transition = { {
        type:"tween",
        ease:"easeIn",
        duration:0.3,
        delay:-0.1
    }}
       >
            <motion.div 
            initial = "init"
            animate = {number > 0 ? "animation": "init"}
            
            variants = {transitionBoxEl}
            transition = {{type: "tween", ease: "easeInOut", duration: 0.5, delay:0.1}}
            
            className = {classes.Upbox} ></motion.div>
            <Carousel/>
            <motion.div 
            initial = "init"
            animate = {number > 0 ? "animation": "init"}
            variants = {transitionBoxEl}
           transition = {{type: "tween", ease: "easeInOut", duration: 0.5, delay:0.1}}
            
            className = {classes.Downbox} ></motion.div>
            <FullPage offScroll = {valueShow}>
                <ServicePage/>
            </FullPage>
        </motion.div>
        
    )
}

export default Service;