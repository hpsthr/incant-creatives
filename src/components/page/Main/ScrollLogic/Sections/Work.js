import React, {useContext} from 'react';
import classes from '../../Main.module.css'

import {motion} from 'framer-motion'
import {transitionAnimationText} from '../../../Transition/Motion'
import Context from '../../../../../context/ContextProp';
import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import Text2 from '../../../../Animation/TextAnimation/Text2'
import DivBox from "../../../SectionTemplate/DivBox"
import Imgpro from '../../../Portfolio/ScrollLogic/Section/Imgpro';

import first1 from '../../../../../Resources/Portfolio/Images/first1.jpg'
import first2 from '../../../../../Resources/Portfolio/Images/first2.png'
import three2 from '../../../../../Resources/Portfolio/Images/three2.png'
import three3 from '../../../../../Resources/Portfolio/Images/three3.png'
import three1 from '../../../../../Resources/Portfolio/Images/three1.png'
import AsstOne from '../../../../../Resources/Portfolio/Images/AsstOne.png'
import four1 from '../../../../../Resources/Portfolio/Images/four1.jpg'


const Work = props => {
    const iNum = 3;
    const {number} = useContext(Context)

    return(
        <ContainerInline>
            <Left leftstyle = {{left:"10vw"}}>
            <DivBox number = {iNum}>
            <div className ={classes.Box} style = {window.innerWidth > 765 ? {margin:"20vh 2vw", textAlign: "left"}:{margin:"5vh -3vw", textAlign: "left"}}>
                    <h1>
                        <Text2 Y = {20} number = {iNum} text = "Our"/>&nbsp;
                        <Text2 Y = {20} number = {iNum} text = "Work"/>
                    </h1>
                    <motion.p
                    style = {window.innerWidth > 765 ? {fontSize:"14px" , width:"25vw"} : {width:"88vw"}}
                           initial= "init"
                           animate = {number === iNum ? "animation" : "init"}
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
            </DivBox>
            </Left>
            <Right rightstyle = {{right:"10vw"}}>
                <div className = {classes.PortBox}>
                    <div>
                        <span><Imgpro img = {first1} num = {3}/></span>
                        <span><Imgpro img = {first2} num = {3}/></span>
                    </div>
                    <div><Imgpro img = {three2} num = {3}/></div>
                    <div>
                        <span><Imgpro img = {three3} num = {3}/></span>
                        <span><Imgpro img = {three1} num = {3}/></span>
                    </div>
                    <div>
                        <span><Imgpro img = {AsstOne} num = {3}/></span>
                        <span><Imgpro img = {four1} num = {3}/></span>
                    </div>
                </div> 
            </Right>
        </ContainerInline>
    )
}

export default Work;