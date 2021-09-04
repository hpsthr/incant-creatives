import React, {useContext} from 'react';
import Aux from '../../../../hoc/Auxillary'
import {FullPageSections, FullpageSection, FullpageNavigation} from '../../../../ScrollSection/index'

// import classes from '../About.module.css'
import Context from '../../../../context/ContextProp'
import ContextI from '../../../../ScrollSection/FullpageContext';
import { motion } from 'framer-motion';


import Info from "./Section/Info"
import WhatWeDo from "./Section/WhatWeDo"
import WhyUs from "./Section/WhyUs"
import OurTeam from "./Section/OurTeam"
import OurThinking from './Section/OurThinking'
import KnowUs from "./Section/KnowUs"



const Apage = () => {

    const name = {
        0: 'Info',
        1: 'What We Do',
        2: 'Our Team',
        3: "Why Us",
        4: "Our Thinking",
        5: "Know Us Better"
    }

    
    const {number} = useContext(ContextI)
    const {height , showB, valueShow, contact} = useContext(Context)
    
    




       return (
        <Aux>
            <motion.div
            initial = {{opacity: 0 }}
            animate = {{opacity: 1}}
            exit = {{opacity:0}}
            transition = {{type: "tween", ease: "easeIn", duration: 0.5, delay:0.2}}
            >
            <FullpageNavigation
                name= {name}
                style={{
                opacity: !number < 1 || showB ? 1: 0.5,
                transform: valueShow || contact ?  "translate(200px, 3px)": "translate(-30px , 3px)",
                
                
                transition: "0.2s ease-out"
            }}>

            </FullpageNavigation>
            </motion.div>
            <motion.div>
            <FullPageSections>


            <FullpageSection style={{height: height,}}>
                <Info/>
            </FullpageSection>

            <FullpageSection style={{height: height,}}>
                <WhatWeDo/>
            </FullpageSection>

            <FullpageSection style={{height: height,}}>
               <WhyUs/>
            </FullpageSection>

            <FullpageSection style={{height: height,}}>
                <OurTeam/>
            </FullpageSection>

            <FullpageSection style={{height: height,}}>
                <OurThinking/>
            </FullpageSection>

            <FullpageSection style={{height: height,}}>
                <KnowUs/>
            </FullpageSection>

            </FullPageSections>
            </motion.div>

        </Aux>
    )
}

export default Apage