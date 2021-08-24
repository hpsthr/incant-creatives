import React, {useContext} from 'react';
import classes from '../../Main.module.css'
import {AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineLinkedin ,AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {motion} from 'framer-motion'

import Context from '../../../../../context/ContextProp';
import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import ButtonArrow from "../../../../Animation/ButtonAnimation/ButtonArrow"
import Text2 from '../../../../Animation/TextAnimation/Text2';
import Aux from '../../../../../hoc/Auxillary';




const wrapperVariants = {
    initial: {
      clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)', 
      opacity:0,
      transition: { 
        
        duration: .6 }
    },
    animate: {
      clipPath: 'polygon(14% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity:1,
      transition: { 
       
      duration: .6,}
    }
  }

  const iconAnimate = {
    initial: {
      y:70,
      opacity:0,
      transition:{
        duration:0.5
      }
      
    },
    animate:{
      y:0,
      opacity:1,
      trasition:{
        duration:.5
      }
    }
  }

  const animateContact = {
    init: {
        y:60,
        opacity:0,

    },
    animation:{
        y:0,
        opacity:1,
    }
}
const WorkTogether = props => {

    const {number, setDrop, setForm} = useContext(Context)
    const iNum = 5

    return (
      <Aux>
      
        <ContainerInline>
          
            <Left leftstyle ={{width:"40vw"}} >
              <div style = {{position:"relative",top:"25vh", left:"9vw"}} className = {classes.Box}>
            <h1  style = {{fontSize:"60px", textAlign:"start",marginBottom:10}}>
            <Text2 Y= {60} del = {0.2}  dur = {0.3} number={iNum} text = "Let's"/> &nbsp;
            <Text2 Y= {60} del = {0.2}  dur = {0.3} number={iNum} text = "Work"/> 
            </h1>
            <h1   style = {{fontSize:"60px", textAlign:"start", marginTop:0}}>
            <Text2 Y= {60} del = {0.2}  dur = {0.3} number={iNum} text = "Together "/> 
            </h1>
            <div className = {classes.IconBox}>
              <motion.div
              initial = "initial"
              animate = {number === iNum ? "animate" : "initial"}
              variants = {iconAnimate}
              className = {classes.facebook}
              >
              <AiOutlineFacebook 

              style = {{cursor:"pointer"}} fontSize= "65px"/>
              </motion.div>
              <motion.div
               initial = "initial"
               animate = {number === iNum ? "animate" : "initial"}
               variants = {iconAnimate}
              >
              <AiOutlineWhatsApp style = {{cursor:"pointer"}}  fontSize= "65px"/>
              </motion.div>
              <motion.div
               initial = "initial"
               animate = {number === iNum ? "animate" : "initial"}
               variants = {iconAnimate}
              >
              <AiOutlineLinkedin style = {{cursor:"pointer"}}  fontSize= "65px"/>
              </motion.div>
              <motion.div
               initial = "initial"
               animate = {number === iNum ? "animate" : "initial"}
               variants = {iconAnimate}
              >
              <FiTwitter style = {{cursor:"pointer"}}  fontSize= "65px"/>
              </motion.div>
              <motion.div
               initial = "initial"
              animate = {number === iNum ? "animate" : "initial"}
              variants = {iconAnimate}
              >
              <AiOutlineInstagram style = {{cursor:"pointer"}}  fontSize= "65px"/>
              </motion.div>
            
            
            
            
            
            </div>
            </div>
            
            
           
            </Left>
            <Right rightstyle = {{width:"60vw"}}>
                <div className = {classes.Shapewrap}>
            <motion.div 
            initial = "initial"
            animate = {number === 5 ? "animate" : "initial"}
            variants = {wrapperVariants}
            
            
            className = {classes.Shape}>

<motion.div
initial= "init"
animate = {number === iNum ? "animation" : "init"}
variants = {animateContact}
transition = {{
    delay:0.1,
    duration:0.6,
    type:"tween",
}}
>
    <h1>Contact</h1>
    <p>+919999999999</p>
    <h1>Email</h1>
    <p> info@incarncreatives.com</p>
    <h1>Meet Us</h1>
    <p> Our address is going to be here and we are proud of our company as whole </p>

</ motion.div>
              <div className = {classes.Button}>
            <ButtonArrow click = {() => {setDrop(); setForm(true)}}/>
            
            </div>

             </motion.div>
             </div>
             
            </Right>
        </ContainerInline>
        </Aux>
    )
}

export default WorkTogether;