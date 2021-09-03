import React,{useContext} from 'react';

import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp'

import classes from "../../About.module.css"
import ProgressiveImage from 'react-progressive-image';

import { transitionAnimation } from './Motion';
import KnowImg from '../../../../../Resources/About/KnowUs.png'


const KnowUs = props => {
    
    const {number} = useContext(Context)

    return(
            <div className = {classes.ContainerBlock}>
                <div className = {classes.KnowUp}>
                    <div style ={{fontSize:"15px", position:"relative", textAlign:"right", top:"9vh"}}>
                    <p>Great things in businesses are never done by one person, 
                        <br/> 
                        they're done by a team of people. </p>
                    <p> - Steve Jobs</p>
                    </div>
                
                </div>
                <div className = {classes.KnowDown}> 
                <ProgressiveImage
                    src ={KnowImg}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === 5 ? "animation" : "init"}
                    variants = {transitionAnimation}
                    transition = {{
                        delay:0.1,
                        duration:0.6,
                        type:"tween",
                        }}
                    width="1920" height="auto" style={{ opacity: loading ? 0.5 : 1 }} src={src} alt="animage" />
                        )}
                    </ProgressiveImage>
                </div>
                

            </div>
    )
}

export default KnowUs