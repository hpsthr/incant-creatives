import React, {useContext} from 'react';
import {motion} from 'framer-motion'
import context from '../../../context/ContextProp'

const Text = (props) => {

    

    const spanArry = props.text.split("")

    
    const {number} = useContext(context)

    const animationTransition = {

        init:{y:props.Y === undefined ? "50px": props.Y},
        animate: {y:0}
    }

    
    let dur = props.dur === undefined ? 0.4 : props.dur;
    let del = props.del === undefined ? 0.2 : props.del
    return(
        
        spanArry.map((el, index) => 
            <motion.span
            style = {{display:"inline-block"}}
            initial = "init"
            animate = {number === props.number ? "animate" : "init"}
            variants = {animationTransition}
            
            transition = {{
                type: "spring",
                stiffness:100,
                ease: "easeInOut",
                duration:dur,
                delay:(del+ (0.15 * index))
            }}
            key = {index}>{el}
            
            </motion.span>)

    )

}


export default Text;