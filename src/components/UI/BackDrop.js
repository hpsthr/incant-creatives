import classes from './BackDrop.module.css'


const backDrop = props => props.data ? <div  onClick = {props.click} className = {classes.BackDrop}> </div> : null 

export default backDrop;