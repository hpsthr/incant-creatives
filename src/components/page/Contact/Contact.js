import React from 'react';
import FullPage from '../../../ScrollSection/index'

import ContactPage from './ScrollLogic/CPage.js';
import {motion} from 'framer-motion'
import transition from '../Transition/TransitionProp'

const Contact = () => {
   
    return(
        <motion.div
        name= "contact"
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
        <FullPage>
            <ContactPage/>
        </FullPage>
        </motion.div>
    )
}

export default Contact