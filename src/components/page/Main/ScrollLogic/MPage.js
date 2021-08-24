import React,{useContext} from 'react';
import Aux from '../../../../hoc/Auxillary'
import  {FullPageSections, FullpageSection, FullpageNavigation} from '../../../../ScrollSection/index'
import VideoFl from '../Video/Video'
import classes from '../Main.module.css'
import Context from '../../../../context/ContextProp'
import ContextI from '../../../../ScrollSection/FullpageContext';
import Mouse from './MouseIco/Mouse'
import { motion } from 'framer-motion';


import SecondSection from './Sections/SecondSection'
import WhatWe from './Sections/WhatWe'
import Work from './Sections/Work';
import OurClient from './Sections/OurClient';
import WorkTogether from './Sections/WorkTogether';

const Mpage = (props) => {

    const {number} = useContext(ContextI)
    const {height , showB, valueShow, contact} = useContext(Context)
  
    
    const name  = {
        0:"Intro",
        1:"What",
        2:"What we Offer",
        3:"Our Work",
        4:"Our Client",
        5:"Work Together"
    }
    
    
    return (
        <Aux>
        <motion.div
        initial = {{opacity: 0}}
        animate = {{opacity: 1}}
        exit = {{opacity:0}}
        transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
        >
        <FullpageNavigation
        name = {name}
        style={{
        opacity:!number < 1 || showB ? 1 : 0.5,
        transform: valueShow || contact ?  "translate(200px, 3px)": "translate(-30px , 3px)",
        height: "38vh",
        top:"30vh",
        transition:"0.2s ease-out"
        
                }}
        ></FullpageNavigation>
         </motion.div>
         
        <motion.div>
        <FullPageSections>
            

            <FullpageSection className={classes.Action} style={{height: height,}}>
                <Mouse/>
                <VideoFl/>
            </FullpageSection>

            <FullpageSection style={{height: height}}>
                <SecondSection/>
            </FullpageSection>

            <FullpageSection style={{height: height}}>
                <WhatWe/>
            </FullpageSection>

            <FullpageSection style={{height: height}}>
                <Work/>
            </FullpageSection>

            <FullpageSection style={{height: height}}>
                <OurClient/>
            </FullpageSection>

            <FullpageSection style={{height: height}}>
                <WorkTogether/>
            </FullpageSection>

        </FullPageSections>
        </motion.div>
        </Aux>

    )
}

export default Mpage