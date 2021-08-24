import React, {useContext} from 'react';
import classes from '../../Main.module.css'


import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import Text2 from '../../../../Animation/TextAnimation/Text2'
import DivBox from "../../../SectionTemplate/DivBox"
import ContextI  from '../../../../../ScrollSection/FullpageContext';
import ProgressiveImage from 'react-progressive-image'
import {motion} from 'framer-motion'
import {useHistory} from 'react-router-dom'
// import {Link} from 'react-router-dom'

import Ione from '../../../../../Resources/Service/Ione.jpg'
import Itwo from '../../../../../Resources/Service/Itwo.jpg'
import Ithree from '../../../../../Resources/Service/Ithree.jpg'
import Ifour from '../../../../../Resources/Service/Ifour.jpg'
import Ifive from '../../../../../Resources/Service/Ifive.jpg'
import Isix from '../../../../../Resources/Service/Isix.jpg'
import Iseven from '../../../../../Resources/Service/Iseven.png'
import Ieight from '../../../../../Resources/Service/Ieight.jpg'
import Inine from '../../../../../Resources/Service/Inine.jpg'
import Iten from '../../../../../Resources/Service/Iten.jpg'

import whatwe from '../../../../../Resources/Main/whatwe.png'
import { transitionAnimationScale } from '../../../../Animation/Motion';

const WhatWe = props => {
    const history = useHistory()
   
    const { number,}  = useContext(ContextI)
    return(
        <ContainerInline>

            <Left >
            <div className ={classes.Box} style = {{margin:"8vh 8vw", textAlign: "left"}} > 
            <h1 style ={{fontSize:"30px"}}>
            
            <Text2 Y= {30} number={2} text = "What"/> &nbsp;
            <Text2 Y= {30} number={2} text = "We"/> &nbsp;
            <Text2 Y= {30} number={2} text = "Offer?"/>
            </h1>
            <div className = {classes.ImageBox}>
        <div onClick = {() => history.push('/service#branding')}><img alt="1" src={Ione}/><span></span><h2>Branding</h2></div>
        <div onClick = {() => history.push('/service#packaging') }><img alt="1" src={Itwo}/><span></span><h2>Packaging</h2></div>
        <div onClick = {() => history.push('/service#uiux') }><img alt="1" src={Ithree}/><span></span><h2>UI UX</h2></div>
        <div onClick = {() => history.push('/service#research') }><img alt="1" src={Ifour}/><span></span><h2>R & D</h2></div>
        <div onClick = {() => history.push('/service#productdesign') }><img alt="1" src={Ifive}/><span></span><h2>Product Design</h2></div>
        <div onClick = {() => history.push('/service#productdevelopment') }><img alt="1" src={Isix}/><span></span><h2>Product Development</h2></div>
        <div onClick = {() => history.push('/service#servicedesign') }><img alt="1" src={Iseven}/><span></span><h2>Service Design</h2></div>
        <div onClick = {() => history.push('/service#marketing') }><img alt="1" src={Ieight}/><span></span><h2>Markeging</h2></div>
        <div onClick = {() => history.push('/service#launchingstrategies') }><img alt="1" src={Inine}/><span></span><h2>Launching Strategies</h2></div>
        <div onClick = {() => history.push('/service') }><img alt="1" src={Iten}/><span></span><h2> Learn With Us</h2></div>
        

        </div>

        
            </div>
            </Left>
            <Right rightstyle = {{right:"-5vw"}}>
              <DivBox number = {2}>
                  <div className = {classes.BoxTri}>
              <ProgressiveImage
                    src ={whatwe}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === 2 ? "animation" : "init"}
                    variants = {transitionAnimationScale}
                    transition = {{delay:0.1, duration:0.6, type:"tween",}}
                    style={{ opacity: loading ? 0.5 : 1, maxHeight:"350px" }} src={src} alt="animage" />
                        )}
                    </ProgressiveImage>
                    </div>
                </DivBox>  
            </Right>
        </ContainerInline>
    )
}



export default WhatWe;