import React from 'react';
import FullPage from '../../../ScrollSection/index';
import AboutPage from './ScrollLogic/Page';
import { motion } from 'framer-motion';
import transition from '../Transition/TransitionProp'

const About = () => {
    
return(
        <motion.div
        name = 'about'
        initial = "initial"
            animate ="in"
            exit = "out"
            variants = {transition}
            transition = { {
                type:"tween",
                ease:"easeIn",
                duration:0.3,
                delay:-0.1
            }}
        >
            <FullPage >
                <AboutPage/>
            </FullPage>
        </motion.div>

            
                
)
};

export default About;