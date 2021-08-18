import React from 'react';
import videoFl from '../../../../Resources/video_main.mp4'

import classes from './Video.module.css'


const video = props => {
    
    return(
    <video  src={videoFl} width="1920" height="1080" className={classes.Video} autoPlay loop muted>
        
    </video>
    )
}

export default video
