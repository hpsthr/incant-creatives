import React, {useContext} from 'react';
import {motion} from 'framer-motion'
import context from '../../../context/ContextProp'

const Text = (props) => {

    

    const spanArry = props.text.split("")

    
    const {number} = useContext(context)

    const animationTransition = {

        init:{y:0},
        animate: {y:[0,-30,0]}
    }

    
    
    return(
        spanArry.map((el, index) => 
            <motion.span
            initial = "init"
            animate = {number === props.number ? "animate" : "init"}
            variants = {animationTransition}
            
            transition = {{
                type: "spring",
                stiffness:50,
                duration:0.4,
                delay:(0.4 + (0.12 * index))
            }}
            key = {index}>{el}</motion.span>)
    )

}

export default Text