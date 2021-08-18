import React,{useContext} from 'react';
import Aux from '../../../../../hoc/Auxillary';
import classes from '../../Service.module.css'
// import Context from '../../../../../context/ContextProp';
import ContextI from '../../../../../ScrollSection/FullpageContext'

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


const Start = () => {

    const {goto, slides}  = useContext(ContextI)
    return(
        <Aux>
        <div className = {classes.ImageBox}>
        <div onClick = {() => goto(slides[2]) }><img alt="1" src={Ione}/><span></span><h2>Branding</h2></div>
        <div onClick = {() => goto(slides[3]) }><img alt="1" src={Itwo}/><span></span><h2>Packaging</h2></div>
        <div onClick = {() => goto(slides[4]) }><img alt="1" src={Ithree}/><span></span><h2>UI UX</h2></div>
        <div onClick = {() => goto(slides[5]) }><img alt="1" src={Ifour}/><span></span><h2>R & D</h2></div>
        <div onClick = {() => goto(slides[6]) }><img alt="1" src={Ifive}/><span></span><h2>Product Design</h2></div>
        <div onClick = {() => goto(slides[7]) }><img alt="1" src={Isix}/><span></span><h2>Product Development</h2></div>
        <div onClick = {() => goto(slides[8]) }><img alt="1" src={Iseven}/><span></span><h2>Service Design</h2></div>
        <div onClick = {() => goto(slides[9]) }><img alt="1" src={Ieight}/><span></span><h2>Markeging</h2></div>
        <div onClick = {() => goto(slides[10]) }><img alt="1" src={Inine}/><span></span><h2>Launching Strategies</h2></div>
        <div onClick = {() => goto(slides[3]) }><img alt="1" src={Iten}/><span></span><h2> Learn With Us</h2></div>
        

        </div>

        </Aux>
    )
}

export default Start;