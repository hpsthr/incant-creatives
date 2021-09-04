
import React,{useContext} from 'react';
import Aux from '../../../../hoc/Auxillary'
import  {FullPageSections, FullpageSection, FullpageNavigation} from '../../../../ScrollSection/index'

import classes from '../Contact.module.css'
import Context from '../../../../context/ContextProp'
import ContextI from '../../../../ScrollSection/FullpageContext';
import { motion } from 'framer-motion';


const Page = (props) => {

    const {number} = useContext(ContextI)
    const menuContext = useContext(Context)
    
    const name  = {
        0:"firstName",
        1:"secondName",
        2:"thirdName",
        3:"this si defie"
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
        style={{
        opacity:!number < 1 || menuContext.showB ? 1 : 0.5,
        transform: !menuContext.valueShow ? "translate(-30px , 3px)" :"translate(200px, 3px)",
        
        transition:"0.2s ease-out"
        
                }}
        ></FullpageNavigation> </motion.div>
        <motion.div
        >
        <FullPageSections>
            

            <FullpageSection
                className={classes.Action}
                style={{
                height: menuContext.height,
                
            }}>
                Service Page
                
            </FullpageSection>

            <FullpageSection
                style={{
                height: menuContext.height,
            
            }}>
                Sevice Page
            </FullpageSection>

            <FullpageSection
                style={{
                height: menuContext.height,
                
            }}>
                1
            </FullpageSection>
            <FullpageSection
                style={{
                height: menuContext.height,
                
            }}>
                1
            </FullpageSection>

        </FullPageSections>
        </motion.div>
        </Aux>

    )
}

export default Page