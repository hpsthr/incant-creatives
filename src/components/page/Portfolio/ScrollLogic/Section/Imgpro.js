import React, {useContext} from 'react';
import ProgressiveImage from 'react-progressive-image';
import ContextProp from '../../../../../context/ContextProp';
import {motion} from "framer-motion"
import { transitionLineH } from '../../../../Animation/Motion';

const Imgpro = (props) => {

    const {number} = useContext(ContextProp)
    return(
        <ProgressiveImage
                    src ={props.img}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === (props.num === undefined ? 0 : props.num) ? "animation" : "init"}
                    variants = {transitionLineH}
                    transition = {{delay:0.1, duration:0.6, type:"tween",}}
                    style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="animage" />
                        )}
                    </ProgressiveImage>
    )
}
export default Imgpro;