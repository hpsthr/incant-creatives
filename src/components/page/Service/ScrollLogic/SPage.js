import React,{useContext} from 'react';
import Aux from '../../../../hoc/Auxillary'
import  {FullPageSections, FullpageSection, FullpageNavigation} from '../../../../ScrollSection/index'

import classes from '../Service.module.css'
import Context from '../../../../context/ContextProp'
import ContextI from '../../../../ScrollSection/FullpageContext';
import { motion } from 'framer-motion';


import Service from './Section/Service'
import Start from './Section/Start';
import ServiceTemp from '../../SectionTemplate/ServiceTemplate';


const Mpage = (props) => {

    const {number} = useContext(ContextI)
    const {height, showB, valueShow} = useContext(Context)
    const Dwidth = window.innerWidth - (window.innerWidth* 0.38)
    
    const name  = {
        0:"Info",
        1:"Start",
        2:"Branding",
        3:"Packaging",
        4:"UiUx",
        5:"R&D",
        6:"Product Design",
        7:"Product Development",
        8:"Service Design",
        9:"Marketing",
        10:"Lanuching Strategies"
    }
    
    const paragraph = [
        {text: "Branding",
        paragraph: " This is text that you know"},
        {text:"Packaging", 
        paragraph: "this is paragraph text that you have seen"},
        {text:"Ui/nUx", 
        paragraph: `this is text /n and it's you /n while we have to do this this is so nice of you /n \n /n \n /n "make this`},
        {text: "R&d", paragraph: "making this was important and kind at the same time "},
        {text: "Product /n Design", paragraph: "making this was important and kind at the same time "},
        {text: "Product /n Development", paragraph: "making this was important and kind at the same time "},
        {text: "Service /n Design", paragraph: "making this was important and kind at the same time "},
        {text: "Marketing", paragraph: "making this was important and kind at the same time "},
        {text: "Launching /n Strategies", paragraph: "making this was important and kind at the same time "},
    ]
    
  
    return (
        <Aux>
            <motion.div
            initial = {{opacity: 0 }}
            animate = {{opacity: 1}}
            exit = {{opacity:0}}
            transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
            >
        <FullpageNavigation
        name = {name}
        traY ="0px"
        spanStyle={{
            fontSize:"13px",
        }}
        itemStyle={
        {width:"20px", 
        height:"20px", 
        borderRadius:"50%",}
        }
        style={{
        opacity:!number < 1 || showB ? 1 : 0.5,
        transform: !valueShow ? "translate(-30px , 3px)" :"translate(200px, 3px)",

        height: "38vh",
        top:"30vh",
        transition:"0.2s ease-out"
        
                }}
        ></FullpageNavigation> </motion.div>
        
        <motion.div>
        <FullPageSections>


            <FullpageSection className={classes.Action} style={{height: height,}}>
            <Service/>
            </FullpageSection>

            <FullpageSection className={classes.Action} style={{height: height}}>
                <div  style={{width:Dwidth, height: height,}}>
                <Start/>    
                </div>
            </FullpageSection>

            {paragraph.map((el, i) => 
                <FullpageSection className={classes.Action} style={{height: height}}>
                <div  style={{width:Dwidth, height: height,}}>
                    <ServiceTemp number ={i+2} text = {el.text.split("/n").map(el => el)} paragraph ={el.paragraph.split("/n").map(el => el)}/>
                </div>
            </FullpageSection>
                
                )}
            

            
            
            

        </FullPageSections>
        </motion.div>
        </Aux>

    )
}

export default Mpage