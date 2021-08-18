import React,{useContext} from 'react';
import ProgressiveImage from 'react-progressive-image'

import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp'
import Text from '../../../../Animation/TextAnimation/Text'
import classes from "../../About.module.css"



import AboutFront from '../../../../../Resources/About/AboutFront.png'
import {transitionLine, transitionAnimation} from './Motion'


const Info = (props) => {

    const {number} = useContext(Context)

return(
<div className = {classes.First}> 
<motion.div
initial= "init"
animate = {number === 0 ? "animation" : "init"}
variants = {transitionLine}
transition = {{
    delay:0.2,
    duration:0.6,
    type:"tween",
    }}
className = {classes.LineBox}></motion.div>
<ProgressiveImage
                    src ={AboutFront}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === 0 ? "animation" : "init"}
                    variants = {transitionAnimation}
                    transition = {{
                        delay:0.1,
                        duration:0.6,
                        type:"tween",
                        

                    }}
                    width="1920" height="auto" style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="animage" />
                        )}
                    </ProgressiveImage>



                    <div className = {classes.Text}> 
                    <Text text= "About" number = {0} />
                    </div>
                    </div>

)

}

export default Info;