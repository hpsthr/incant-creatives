import React, {useState , useEffect} from 'react';
import { DB } from '../../../hoc/Firebase';
import classes from './Style.module.css'

const InquiryData = () => {
    
const [loading, setLoading] = useState(false)
const [post, setPost] = useState([])

const getAll = DB.collection("Inquiry")

useEffect(() => {getData()})

 const getData = () => {
    const dataF = []
    setLoading(true);
     getAll.onSnapshot(querySnap => {
        querySnap.forEach(doc => {dataF.push({
            ...doc.data(),
             key:doc.id
            })
            
        })
        setPost(dataF)
        setLoading(false)
        })
        
    
}



    return(
        <div>
            {loading ? <h1> Loading ...</h1> :
            <div className = {classes.Main}> 
                {post.map(posts => 
                    <div key = {posts.key} className = {classes.Box}>
                    <p>Name : {posts.name}</p>
                    <p>Phone : {posts.mobile}</p>
                    <p>Email : {posts.email}</p>
                    <p>Message : {posts.message}</p>
                    </div>
                 )}

                </div>
            
            }
        </div>
    )
}

export default InquiryData