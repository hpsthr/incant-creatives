import React,{useContext, useState , useEffect} from 'react';
import Aux from '../../../../hoc/Auxillary'
import  {FullPageSections, FullpageSection, FullpageNavigation} from '../../../../ScrollSection/index'

import classes from '../Service.module.css'
import Context from '../../../../context/ContextProp'
import ContextI from '../../../../ScrollSection/FullpageContext';
import { motion } from 'framer-motion';
import {useLocation} from "react-router-dom"
import { paragraph } from '../../../../Resources/Main/ServiceData';


import Service from './Section/Service'
import Start from './Section/Start';
import ServiceTemp from '../../SectionTemplate/ServiceTemplate';


const Mpage = (props) => {

    const {number, goto, slides} = useContext(ContextI)
    const {height, showB, valueShow, contact} = useContext(Context)
    const [hash, setHash] = useState(null)
    const Dwidth = window.innerWidth - (window.innerWidth* 0.38)
    const pathName = useLocation()
  
    // .hash.split("#")[1]
    

    
useEffect ( () => {
     setHash(pathName.hash.split("#")[1])
},[pathName.hash])

        switch (hash) {
            case "branding":
            goto(slides[2])
            setHash(null)
            break;
            case "packaging":
            goto(slides[3])
            setHash(null)
            break;
            case "uiux":
            goto(slides[4])
            setHash(null)
            break;
            case "research":
            goto(slides[5])
            setHash(null)
            break;
            case "productdesign":
            goto(slides[6])
            setHash(null)
            break;
            case "productdevelopment":
            goto(slides[7])
            setHash(null)
            break;
            case "servicedesign":
            goto(slides[8])
            setHash(null)
            break;
            case "marketing":
            goto(slides[9])
            setHash(null)
            break;
            case "launchingstrategies":
            goto(slides[10])
            setHash(null)
            break;

        
            default:
                
                break;
        }
    
   
     
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
        transform:valueShow || contact ?  "translate(200px, 3px)": "translate(-30px , 3px)",

        
        
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
                <FullpageSection key = {i} className={classes.Action} style={{height: height}}>
                <div  style={{width:Dwidth, height: height,}}>
                    <ServiceTemp number ={i+2} text = {el.text.split("/n")} paragraph ={el.paragraph.split("/n")}/>
                </div>
            </FullpageSection>
                
                )}
            

            
            
            

        </FullPageSections>
        </motion.div>
        </Aux>

    )
}

export default Mpage