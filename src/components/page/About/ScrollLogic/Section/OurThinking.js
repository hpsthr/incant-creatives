import React,{useContext} from 'react';


import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp'
import Text2 from '../../../../Animation/TextAnimation/Text2'
import classes from "../../About.module.css"

import layer1 from '../../../../../Resources/About/Layer 1.png'
import layer2 from '../../../../../Resources/About/Layer 2.png'
import layer3 from '../../../../../Resources/About/Layer 3.png'
import layer4 from '../../../../../Resources/About/Layer 4.png'
import layer5 from '../../../../../Resources/About/Layer 5.png'
import layer6 from '../../../../../Resources/About/Layer 6.png'
import layer7 from '../../../../../Resources/About/Layer 7.png'
import layer8 from '../../../../../Resources/About/Layer 8.png'
import layer9 from '../../../../../Resources/About/Layer 9.png'
import layer10 from '../../../../../Resources/About/Layer 10.png'



import {transitionBoxEl } from './Motion'


const Thiking = props => {

    const {number } = useContext(Context)

    return (
        <div className = {classes.ContainerBlock}>
            <div className = {classes.ThinkingUp}>
            <div style = {{margin:"10vh 10vw", textAlign: "right"}}>
                        <h1>
                              <Text2 number = {4} text = "Our"/> &nbsp;
                              <Text2 number = {4} text = "Thinking"/>
                              
                              
                            </h1>
                               </div>

            </div>
            <div className = {classes.ThinkingDown}>
                <div style = {{margin:"0 10vw 0 0", textAlign:"right"}}>
                <motion.img 
                            initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.2,
                                duration:0.6,
                                type:"tween",
                             }} 
                             alt ="" height = "210" src = {layer1}/>
                <motion.img
                initial= "init"
                animate = {number === 4 ? "animation" : "init"}
                variants = {transitionBoxEl}
                transition = {{
                    delay:0.3,
                    duration:0.6,
                    type:"tween",
                 }}
                alt ="" height = "210" src = {layer2}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.4,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer3}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.5,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer4}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.6,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer5}/>
                </div>
                <div style = {{margin:"0 10vw 0 0", textAlign:"right"}}>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.7,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer6}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.8,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer7}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:0.9,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer8}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:1,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer9}/>
                <motion.img initial= "init"
                            animate = {number === 4 ? "animation" : "init"}
                            variants = {transitionBoxEl}
                            transition = {{
                                delay:1.1,
                                duration:0.6,
                                type:"tween",
                             }} alt ="" height = "210" src = {layer10}/>
                </div>

            </div>

        </div>

    )
}




export default Thiking;