import React, {useContext} from 'react';
import classes from '../../Main.module.css'
import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import Text2 from '../../../../Animation/TextAnimation/Text2'
import DivBox from "../../../SectionTemplate/DivBox"
import OurCli from '../../../../../Resources/Main/OurClient.png'
import CardT from '../../../../UI/Card';
import ProgressiveImage from 'react-progressive-image';
import {motion} from 'framer-motion'
import Context from '../../../../../context/ContextProp';
import { transitionAnimationScale } from '../../../../Animation/Motion';


const OurClient = props => {
    const iNum = 4; 
  const {number} = useContext(Context)
    return(
        <ContainerInline>
            <Left>
            <div className ={classes.Box} style = {{margin:"10vh 14vw", textAlign: "left"}} > 
            <h1 style = {{fontSize:"3vh"}}>
            <Text2 Y= {"3vh"} del = {0.2}  dur = {0.3} number={iNum} text = "Our "/> &nbsp;
            <Text2 Y= {"3vh"} del = {0.2}  dur = {0.3} number={iNum} text = "Client"/> &nbsp;
            
            </h1>
            </div>
            
            <CardT num = {iNum}/>
            
            </Left>
            <Right >
                <DivBox style = {{left:"5vw"}} number = {iNum}>
                <div  className = {classes.BoxTri} style = {{display: window.innerWidth > 765 ? 'flex': " none" , left:"10vw"}}>
              <ProgressiveImage
                    src ={OurCli}
                    >
                    {(src, loading) => (
                    <motion.img 
                    initial= "init"
                    animate = {number === iNum ? "animation" : "init"}
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

export default OurClient