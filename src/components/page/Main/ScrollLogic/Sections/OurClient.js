import React from 'react';
import classes from '../../Main.module.css'
import ContainerInline from '../../../SectionTemplate/ContainerInline';
import {Left, Right} from '../../../SectionTemplate/Container'
import Text2 from '../../../../Animation/TextAnimation/Text2'
import DivBox from "../../../SectionTemplate/DivBox"


const OurClient = props => {
    const iNum = 4; 
  
    return(
        <ContainerInline>
            <Left>
            <div className ={classes.Box} style = {{margin:"15vh 10vw", textAlign: "left"}} > 
            <h1 style = {{fontSize:"30px"}}>
            <Text2 Y= {28} del = {0.2}  dur = {0.3} number={iNum} text = "Our "/> &nbsp;
            <Text2 Y= {28} del = {0.2}  dur = {0.3} number={iNum} text = "Client"/> &nbsp;
            
            </h1>
            </div>
            </Left>
            <Right >
                <DivBox style = {{left:"5vw"}} number = {iNum}>

                </DivBox> 
            </Right>
        </ContainerInline>
    )
}

export default OurClient