
const transition = {
    initial:{
        opacity:0,
        x:window.innerWidth
        
    },
    in:{
        opacity: 1,
        x: 0,
        transition: {
            type:"tween",
            ease:"easeInOut",
            duration:0.6  
        }
        
        },
    out:{
        opacity:0,
        x:-window.innerWidth,
        transition:{
            type:"tween",
            ease:"easeInOut",
            duration:0.6,
            delay:0.2
        }
       
        
        
        
    }
}

const timeTransition = {
    type: "tween",
    ease:"easeIn",
    duration:0.3
}


const divVarient = {
    initial:{
        opacity:0,
        transition:{
            type:"tween",
            
        }
        
    },
    in:{
        opacity: 1,
        transition:{
            type:"tween",
            delay:0.2
        }
        
       
        
        },
    out:{
        opacity:0,
        transition:{
            type:"tween",
            delay:0.2
        }
        
        
        
        
        
    }
}

export default transition;
export {timeTransition, divVarient}