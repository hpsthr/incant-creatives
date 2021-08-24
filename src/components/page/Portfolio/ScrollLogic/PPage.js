import React, {useContext} from 'react';
import Aux from '../../../../hoc/Auxillary'
import  {FullPageSections, FullpageSection, FullpageNavigation} from '../../../../ScrollSection/index'
import Context from '../../../../context/ContextProp'
import ContextI from '../../../../ScrollSection/FullpageContext';
import classes from '../Portfolio.module.css'
import { motion } from 'framer-motion';
import First from './Section/First';

import AsstOne from '../../../../Resources/Portfolio/Images/AsstOne.png'
import AsstTwo from '../../../../Resources/Portfolio/Images/AsstTwo.png'
import PortfolioInfo from './Section/Info';


const PPage = () => {
    const name = {
        0:"Info",
        1:"Infiriry",
        2:"Body Care",
        3:"Fourth item",
        4:"Fifth Item"
    }
    
    const {number, translateY, goto, slides} = useContext(ContextI)
    const {height , showB, valueShow, contact} = useContext(Context)
    const traY = translateY * -1  * 0.5

    return(
        <Aux>
            <motion.div
            initial = {{opacity: 0 }}
            animate = {{opacity: 1}}
            exit = {{opacity:0}}
            transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
            >
        <FullpageNavigation
        name = {name}
        style={{
        opacity:!number < 1 || showB ? 1 : 0.5,
        transform:valueShow || contact ?  "translate(200px, 3px)": "translate(-30px , 3px)",
        height: "38vh",
        top:"30vh",
        transition:"0.2s ease-out"
        
                }}
        ></FullpageNavigation> 
        </motion.div>

        <motion.div>
        <FullPageSections >
        <FullpageSection
                className={classes.Action}
                style={{height: height}}>
                    <PortfolioInfo/>
                </FullpageSection>

            <FullpageSection
                className={classes.Action}
                style={{height: height}}>
                <div  style={{width:window.innerWidth - (window.innerWidth* 0.5), height: height,}}>
                <First numA ={1} num = {1} >
                    
                 <div className = {classes.BoxImg}>
                <img alt="" src = {AsstOne}/>
                 </div>
                 <div className = {classes.BoxTxt}>
                     <h1>Infiriry</h1>
                     <p> this is goint to be text and I created this for a text and creating this will take some time</p>
                 </div>
                 
                 </First>
                <First numA ={1} num = {2} click = {() => goto(slides[2])} style ={{marginTop:"10vh", transform: `translate(0px , ${number < 3 ? traY * (number - 1) * 0.5 : 0}px)`}}>
                <div className = {classes.BoxTxt}>
                     <h1>Indian Body Care</h1>
                     <p> this is goint to be text and I created this for a text and creating this will take some time</p>
                 </div>  
                 <div className = {classes.BoxImg}>
                <img alt="" src = {AsstTwo}/>
                 </div>
                
                
                </First>
                </div>
            </FullpageSection>

            <FullpageSection
                className={classes.Action}
                style={{height: height}}>
               <div  style={{width:window.innerWidth - (window.innerWidth* 0.5), height: height,}}>
               <First numA ={2} num = {3} click = {() => goto(slides[3])} style ={{marginTop:"-50vh", transform: `translate(0px , ${traY}px)`}} ><h1>three</h1></First>
               </div>
            </FullpageSection>
            
            <FullpageSection
                className={classes.Action}
                style={{height: height}}>
               <div  style={{width:window.innerWidth - (window.innerWidth* 0.5), height: height,}}>
               <First numA ={3} num = {4} click = {() => goto(slides[4])} style ={{marginTop:"-100vh", transform: `translate(0px , ${traY }px)`}} ><h1>four</h1></First>
               </div>
            </FullpageSection>
            <FullpageSection
                className={classes.Action}
                style={{height: height}}>
               <div  style={{width:window.innerWidth - (window.innerWidth* 0.5), height: height,}}>
               <First numA ={4} num = {5} click = {() => goto(slides[5])} style ={{marginTop:"-151vh", transform: `translate(0px , ${traY }px)`}} ><h1>Five</h1></First>
               </div>
            </FullpageSection>

            <FullpageSection
                className={classes.Action}
                style={{height: height}}>
               <div  style={{width:window.innerWidth - (window.innerWidth* 0.5), height: height,}}>
               <First numA ={5} num = {6} click = {() => goto(slides[6])} style ={{marginTop:"-201vh", transform: `translate(0px , ${traY }px)`}} >
                   <h1>Six</h1>
                   
                   </First>
               </div>
            </FullpageSection>

            
            

        </FullPageSections>
        </motion.div>
        </Aux>
    )
}

export default PPage;