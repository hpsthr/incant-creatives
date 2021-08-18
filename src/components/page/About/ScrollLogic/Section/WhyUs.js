import React,{useContext} from 'react';

import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp'

import classes from "../../About.module.css"
import Text2 from '../../../../Animation/TextAnimation/Text2';
import { transitionAnimationText, transitionBoxEl,   } from './Motion';

const WhyUs = (props) => {

    const {number} = useContext(Context)

    return(
        <div className = {classes.ContainerInline}>
                   <div className ={classes.ThirdLeft}>
                   <motion.div 
                        initial= "init"
                        animate = {number === 2 ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.UpBox}></motion.div>
                            
                        <motion.div
                        initial= "init"
                        animate = {number === 2 ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.DownBox}></motion.div>
                    </div>
                    <div className = {classes.ThirdRight}>
                    <div style = {{margin:"20vh 15vw 20vh 10vw ", textAlign: "right"}}>
                    <h1>
                              <Text2 number = {2} text = "Why"/> &nbsp;
                              <Text2 number = {2} text = "Us?"/> 
                              
                              
                               </h1>
                          <motion.p
                           initial= "init"
                           animate = {number === 2 ? "animation" : "init"}
                           variants = {transitionAnimationText}
                           transition = {{
                               delay:0.1,
                               duration:0.6,
                               type:"tween",
                            }}
                          >
                            We Provide you with cost-effective solutions by adding creativity to your brand.
                            <br/>
                            We have experience in all fields of design where whether it is your product or interior,
                            graphics or animations, fashion or automation. 
                            <br/>
                            We focus our enthusiasm on new start-ups and new ideas who are in need of hiring a quality branding and marketing agency at reasonable prices. 
                            <br/>
                            This effort is for helping our brand with anything or everything they need in their initial stages of success.
                            <br/>
                            We help new ideas to become reality in the market. 
                            <br/>
                            Our team guide them with Market Research, Development of their Product from Design to Manufacturing and Launching Strategies. 
                            <br/>
                            After that, we launch it in the market with proper branding and marketing. 
                            <br/>
                            We will always like to collaborate or work with your brand whether it's big or small, irrespective of its growth.
                          </motion.p>
                          
                          </div>

                    </div>

               </div>
    )
}

export default WhyUs;