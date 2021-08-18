import React,{useContext} from 'react';


import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp'

import classes from "../../About.module.css"
import Text2 from '../../../../Animation/TextAnimation/Text2';
import { transitionAnimationText, transitionBoxEl,  } from './Motion';

const What = (props) => {
    const {number } = useContext(Context)

    return(
        <div className = {classes.ContainerInline}>
                      <div className = {classes.SecondLeft}>
                        <div style = {{margin:"20vh 10vw", textAlign: "left"}}>
                          <h1>
                              <Text2 number = {1} text = "What"/> &nbsp;
                              <Text2 number = {1} text = " We"/> &nbsp;
                              <Text2 number = {1} text = " Do"/> 
                              
                               </h1>
                          <motion.p
                           initial= "init"
                           animate = {number === 1 ? "animation" : "init"}
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
                        <div className = {classes.SecondRight}>
                        <motion.div 
                        initial= "init"
                        animate = {number === 1 ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.UpBox}></motion.div>
                            
                        <motion.div
                        initial= "init"
                        animate = {number === 1 ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.DownBox}></motion.div>    
                         </div>
                         
                    </div>
    )
}

export default What;