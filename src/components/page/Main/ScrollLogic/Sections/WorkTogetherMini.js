import React  ,{useContext}from "react";
import classes from '../../Main.module.css'
import {AiOutlineFacebook, AiOutlineWhatsApp, AiOutlineLinkedin ,AiOutlineInstagram} from "react-icons/ai"
import {FiTwitter} from "react-icons/fi"
import {motion} from 'framer-motion'


import Context from '../../../../../context/ContextProp';

import Text2 from '../../../../Animation/TextAnimation/Text2';


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

const WorkMini = () => {
    const {number, setDrop, setForm} = useContext(Context)
    const iNum = 5



return (
    <div className = {classes.miniBox}>
        <div style = {{position:"relative",top:"13vh", left:"9vw"}} className = {classes.Box}>
            <h1  style = {{fontSize:"30px", color:'white', textAlign:"start",marginBottom:10}}>
            <Text2 Y= {30} del = {0.2}  dur = {0.3} number={iNum} text = "Let's"/> &nbsp;
            <Text2 Y= {30} del = {0.2}  dur = {0.3} number={iNum} text = "Work"/> 
            </h1>
            <h1   style = {{fontSize:"30px",color:'white', textAlign:"start", marginTop:0}}>
            <Text2 Y= {30} del = {0.2}  dur = {0.3} number={iNum} text = "Together "/> 
            </h1>
            <div className = {classes.IconBox}>
              <div
              
              className = {classes.facebook}
              >
              <AiOutlineFacebook 

              style = {{cursor:"pointer"}} fontSize= "40px"/>
              </div>
              <div
               
              >
              <AiOutlineWhatsApp style = {{cursor:"pointer"}}  fontSize= "40px"/>
              </div>
              <div
              
              >
              <AiOutlineLinkedin style = {{cursor:"pointer"}}  fontSize= "40px"/>
              </div>
              <div
               
              >
              <FiTwitter style = {{cursor:"pointer"}}  fontSize= "40px"/>
              </div>
              <div
              
              >
              <AiOutlineInstagram style = {{cursor:"pointer"}}  fontSize= "40px"/>
              </div>
            
            
            
            
            
            </div>
            </div>

            <motion.div
initial= "init"
animate = {number === iNum ? "animation" : "init"}
variants = {animateContact}
transition = {{
    delay:0.1,
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


<button onClick = {() => {setDrop(true); setForm(true)}} className = {classes.ButtonIn}>
    Send Us Inquiry
</button>
    </div>
)

}

export default  WorkMini