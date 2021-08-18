import React,{useContext} from 'react';
// import ProgressiveImage from 'react-progressive-image'

import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp'


import Keshav from '../../../../../Resources/About/Keshav.png'
import Aditya from '../../../../../Resources/About/AdityaDumbAss.png'

import classes from "../../About.module.css"
import Text2 from '../../../../Animation/TextAnimation/Text2';
import { transitionAnimationText, transitionBoxEl, transitionCard  } from './Motion';

const Team = (props) => {

    const {number } = useContext(Context)

    return(
        <div className = {classes.ContainerInline}>
                      <div className = {classes.SecondLeft}>
                        <div style = {{margin:"20vh 10vw", textAlign: "left"}}>
                        <h1>
                              <Text2 del = {0.08} dur={0.2} number = {3} text = "Our"/> &nbsp;
                              <Text2 del = {0.08} dur={0.2} number = {3} text = "Team"/>
                              
                              
                               </h1>
                          <motion.p
                           initial= "init"
                           animate = {number === 3 ? "animation" : "init"}
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
                             We will always like to collaborate or work with your brand whether it's big or small, irrespective of its growth.
                          </motion.p>

                          
                          </div>
                          
                      </div>
                        <div className = {classes.SecondRight}>
                        <motion.div 
                        initial= "init"
                        animate = {number === 3 ? "animation" : "init"}
                        variants = {transitionBoxEl}
                        transition = {{
                            delay:0.1,
                            duration:0.6,
                            type:"tween",
                         }}
                        className = {classes.UpBox}></motion.div>
                        <div className = {classes.CardContainer}>
                            <motion.div initial= "init"
                        animate = {number === 3 ? "animation" : "init"}
                        variants = {transitionCard}
                        transition = {{
                            delay:0.3,
                            duration:0.6,
                            type:"tween",
                         }} className = {classes.Card}>
                             <motion.img 
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }}
                             height ="110" width = "auto" alt ="" src ={Keshav}/>
                             <motion.div 
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }}
                             className ={classes.Line}></motion.div>
                             <motion.p 
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }}
                             style ={{fontSize:"14px"}} >Keshav</motion.p>
                             <motion.p
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }}
                             >CEO</motion.p>
                         </motion.div>
                            <motion.div
                            initial= "init"
                            animate = {number === 3 ? "animation" : "init"}
                            variants = {transitionCard}
                            transition = {{
                                delay:0.4,
                                duration:0.6,
                                type:"tween",
                             }} className = {classes.Card}>
                                 <motion.img 
                                 initial= "init"
                                 animate = {number === 3 ? "animation" : "init"}
                                 variants = {transitionAnimationText}
                                 transition = {{
                                     delay:0.7,
                                     duration:0.5,
                                     type:"tween",
                                  }}
                                 height ="110" width = "auto" alt ="" src ={Aditya}/>
                             <motion.div 
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }}
                             className ={classes.Line}></motion.div>
                             <motion.p 
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }} 
                            style ={{fontSize:"14px"}}>Aditya</motion.p>
                             <motion.p 
                             initial= "init"
                             animate = {number === 3 ? "animation" : "init"}
                             variants = {transitionAnimationText}
                             transition = {{
                                 delay:0.7,
                                 duration:0.5,
                                 type:"tween",
                              }}
                             >Design Director</motion.p>
                             </motion.div>
                        </div>

                        <motion.div
                        initial= "init"
                        animate = {number === 3 ? "animation" : "init"}
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


export default Team;