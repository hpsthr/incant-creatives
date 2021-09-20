
import React, {useContext, } from 'react';
import classes from '../../Main.module.css'
import ProgressiveImage from 'react-progressive-image';
import {motion} from 'framer-motion'
import {transitionAnimation, transitionAnimationText} from '../../../Transition/Motion'
import Context from '../../../../../context/ContextProp';
import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import Text2 from '../../../../Animation/TextAnimation/Text2'

import ClockImg from '../../../../../Resources/Main/Clock.jpg'

const Second = props => {





    const {number} = useContext(Context)
   

   


return(

    <ContainerInline>
        <Left>
        <ProgressiveImage
                    src ={ClockImg}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === 1 ? "animation" : "init"}
                    variants = {transitionAnimation}
                    transition = {{
                        delay:0.1,
                        duration:0.6,
                        type:"tween",
                    }}
                    style={{ opacity: loading ? 0.5 : 1,
                         }}
                    src={src} 
                    width={window.innerWidth > 760 ? `${window.innerWidth -(window.innerWidth * 0.45)}px` :`${window.innerWidth}px` } height={window.innerWidth > 760 ? `${window.innerHeight}px`: `${window.innerHeight -(window.innerHeight * 0.45)}px`}
                    alt="animage"
                    className={classes.Image} />
                        )}
                    </ProgressiveImage>

        </Left>
        <Right>
            <div className ={classes.Box}  > 
            <h1>
            <Text2  Y={"3vh"} number = {1} text = 'What'/>
            </h1>
            <motion.p
                           initial= "init"
                           animate = {number === 1 ? "animation" : "init"}
                           variants = {transitionAnimationText}
                           transition = {{
                               delay:0.1,
                               duration:0.6,
                               type:"tween",
                            }}
                          >
                            We Provide you with cost-effective solutions by adding creativity to your brand.
                            <br/>
                            We have experience in all fields of design where whether it is your product or interior,
                            graphics or animations, fashion or automation. 
                            <br/>
                            We focus our enthusiasm on new start-ups and new ideas who are in need of hiring a quality branding and marketing agency at reasonable prices. 
                            <br/>
                            This effort is for helping our brand with anything or everything they need in their initial stages of success.
                            <br/>
                            We help new ideas to become reality in the market. 
                            <br/>
                            Our team guide them with Market Research, Development of their Product from Design to Manufacturing and Launching Strategies. 
                            <br/>
                            After that, we launch it in the market with proper branding and marketing. 
                            <br/>
                            We will always like to collaborate or work with your brand whether it's big or small, irrespective of its growth.
                          </motion.p>
            </div>
        </Right>
        
                    </ContainerInline>
)

}


export default Second