import React, {useContext} from 'react';
// import Axios from 'axios'
import Context from '../../context/ContextProp'
import classes from './Model.module.css'
import {motion} from 'framer-motion';
// import { DB } from '../../hoc/Firebase';


const Form = (props) => {
 

    const {form} = useContext(Context)
    // const [data , setData] = useState({
    //     name:"",
    //     email:"",
    //     phone:"",
    //     message:"",
    // })

    // const setdata = async (e) => {
        
    //     setData({
    //         name:e.target.id === "name" ? e.target.value:data.name,
    //         email:e.target.id === "email" ? e.target.value: data.email,
    //         phone:e.target.id === "phone" ? e.target.value: data.phone,
    //         message:e.target.id === "message" ? e.target.value: data.message,
            
    //     })
    
        

       
    // }

    const submitData = async (e) => {
        e.preventDefault()
      


    }

    return(
    
    
    <div className = {classes.FormPosition} style={{...props.style}} >
              <motion.form
              
              data-netlify = "true"
              onSubmit="submit"
              name = "contact"
              method = "POST"
              initial = {{
                  y:"58vh",
                  scaleY:0.08,
                  scaleX:0.65
              }}
              
              animate = {form ? {
                  y:"3vh",
                  scaleY:1,
                  scaleX:1,
                  originY:0,
              }:{}}
              
              transition ={{
                  type:"spring",
                  
                  ease:"easeInOut",
                  duration:0.6
              }}
              className = {classes.Form}
               >
                  <input type="hidden" name="form-name" value="contact"/>
                <label>
                  Name 
                <input type = "text" id = "name"  />
                </label>
                <label>
                   Email
                <input type = "email" id = "email"  />
                </label>
                <label>
                   Mobile 
                <input type = "number" id = "phone"  />
                </label>
                <label>
                    Message
                <textarea 
                style={{
                    height:100
                }}
                 type = "text" id = "message"   />
                </label>
               
                
                
                
                <button style = {{
                    marginTop:"20px",
                    position:"relative", 
                    width:"80px",
                    height:"30px",
                    borderRadius:"15px",
                    backgroundColor:"grey",
                    cursor:"pointer",
                    border:"none"}}type = "submit" onClick = {submitData} > Send </button>
            </motion.form> 
            <motion.div 
            initial = {{
                y:-10,
                opacity:0
            }}

            animate = {form ? {
                y:0,
                opacity:1
            }:{}}

            transition ={{
                type:"spring",
                delay:0.1,
                ease:"easeInOut",
                duration:0.3
            }}
            onClick = {props.click} className = {classes.Button}>
            <span></span>
            <span></span>

            </motion.div>
            
            </div>
    )
}

export default Form