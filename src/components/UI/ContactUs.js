import React from 'react';
import CloseButton from './CloseButton';
import classes from './ModalContact.module.css'
import {motion } from "framer-motion"

import {AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineLinkedin ,AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"

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
const ModalContact = ({show, setContact, setDrop}) => {


    const clicked =  () => {
        setContact(false);
         setDrop(false)
    }
return(
<div style = {{transform: show ? "scaleY(1)" : "scaleY(0)"}} className = {classes.ContactBox}>
<CloseButton style = {{ position:"absolute",top:window.innerWidth > 765 ?"5vh" : "3vh", left:window.innerWidth > 765 ? "85vw": "75vw"}} click = {clicked}/>

<motion.div
initial= "init"
animate = {show ? "animation" : "init"}

variants = {animateContact}
transition = {{
    delay:0.0,
    duration:0.6,
    type:"tween",
}}
className = {classes.ContactText}
>
    <h1>Contact</h1>
    <p>+919999999999</p>
    <h1>Email</h1>
    <p> info@incarncreatives.com</p>
    <h1>Meet Us</h1>
    <p> Our address is going to be here and we are proud of our company as whole </p>

</ motion.div>
<div className = {classes.IconBox}>
              <motion.div
              initial = "initial"
              animate = {show ? "animate" : "initial"}
              variants = {iconAnimate}
              className = {classes.facebook}
              >
              <AiOutlineFacebook 

              style = {{cursor:"pointer"}} fontSize= "20px"/>
              </motion.div>
              <motion.div
               initial = "initial"
               animate = {show ? "animate" : "initial"}
               variants = {iconAnimate}
              >
              <AiOutlineWhatsApp style = {{cursor:"pointer"}}  fontSize= "20px"/>
              </motion.div>
              <motion.div
               initial = "initial"
               animate = { show? "animate" : "initial"}
               variants = {iconAnimate}
              >
              <AiOutlineLinkedin style = {{cursor:"pointer"}}  fontSize= "20px"/>
              </motion.div>
              <motion.div
               initial = "initial"
               animate = {show? "animate" : "initial"}
               variants = {iconAnimate}
              >
              <FiTwitter style = {{cursor:"pointer"}}  fontSize= "20px"/>
              </motion.div>
              <motion.div
               initial = "initial"
              animate = {show ? "animate" : "initial"}
              variants = {iconAnimate}
              >
              <AiOutlineInstagram style = {{cursor:"pointer"}}  fontSize= "20px"/>
              </motion.div>
            
            
            
            
            
            </div>

  
</div>

)
}

export default ModalContact;