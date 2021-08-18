const transitionAnimation = {
    init: {x:'-30vw',scale:0.5, opacity:0},
    animation: {x:0, opacity:1, scale:1,originX:0 }
}
const transitionAnimationText = {
    init: { opacity:0},
    animation: { opacity:1 }
}

const transitionBoxEl = {
    init: {scaleY:0, opacity:0},
    animation : {scaleY:1, opacity:1},
    
}

const transitionCard = {
    init: {scaleX:0, opacity:0},
    animation : {scaleX:1, opacity:1},
}

const transitionLine = {
    init: {scaleX:0, opacity:0},
    animation : {scaleX : 1 , opacity: 1, originX:0}
}
export  {transitionAnimation, transitionAnimationText, transitionBoxEl, transitionCard, transitionLine}