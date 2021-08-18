import React, {useContext, useState, memo} from 'react';
// import Axios from 'axios'
import Context from '../../context/ContextProp'
import classes from './Model.module.css'
import {motion} from 'framer-motion';
// import { DB } from '../../hoc/Firebase';


const Form = (props) => {
 

    const {form} = useContext(Context)
    const [data , setData] = useState({
        name:"",
        email:"",
        phone:"",
        message:"",
    })

    const setdata = async (e) => {
        
        setData({
            name:e.target.id === "name" ? e.target.value:data.name,
            email:e.target.id === "email" ? e.target.value: data.email,
            phone:e.target.id === "phone" ? e.target.value: data.phone,
            message:e.target.id === "message" ? e.target.value: data.message,
            
        })
    
        

       
    }

    // const submitData = async (e) => {
    //     e.preventDefault()
    //    DB.collection("Inquiry")
    //    .add({
    //        name:data.name,
    //        email:data.email,
    //        mobile:data.phone,
    //        message:data.message,
    //    })
    //    .then(() => {
    //        console.log("submit successfully");
    //    })
    //    .catch ( (err) => {
    //        console.log(err)
    //    })
       
    //    setData({
    //     name:"",
    //     email:"",
    //     phone:"",
    //     message:"",
    //    })


    // }

    return(
    
    
    <div className = {classes.FormPosition} >
              <motion.form
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
              end = {!form ? {
                y:"58vh",
                scaleY:0.08,
                scaleX:0.65
              }: {}}
              transition ={{
                  type:"spring",
                  
                  ease:"easeInOut",
                  duration:0.6
              }}
              className = {classes.Form}
              data-netlify="true"
              onSubmit="submit"
              name = "contact"
              method= "POST" >
                  <input type ="hidden" name = "inquiry" value = "contact"/>
                <label>
                  Name 
                <input type = "text" id = "name" value = {data.name}   onChange={setdata} />
                </label>
                <label>
                   Email
                <input type = "email" id = "email" value = {data.email}   onChange={setdata} />
                </label>
                <label>
                   Mobile 
                <input type = "number" id = "phone" value = {data.phone}  onChange={setdata} />
                </label>
                <label>
                    Message
                <textarea 
                style={{
                    height:100
                }}
                 type = "text" id = "message"  value = {data.message}  onChange={setdata} />
                </label>
               
                
                
                
                <button style = {{
                    marginTop:"20px",
                    position:"relative", 
                    width:"80px",
                    height:"30px",
                    borderRadius:"15px",
                    backgroundColor:"grey",
                    cursor:"pointer",
                    border:"none"}}type = "submit" />
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

export default memo(Form);