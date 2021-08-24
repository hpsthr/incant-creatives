import React, {useContext} from 'react';
import classes from './BackDrop.module.css'
import Context from '../../context/ContextProp';



const Drop = () => {
    const {backDrop, setBackDrop, menuShowState, setForm, setContact} = useContext(Context)
    
    return(backDrop ? <div  onClick = {() => {setBackDrop(false); menuShowState({showMenu:false}); setForm(false); setContact(false)}} className = {classes.BackDrop}> </div> : null)} 

export default Drop;