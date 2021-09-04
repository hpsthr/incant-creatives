import React from 'react';
import videoFl from '../../../../Resources/video_main.mp4'

import classes from './Video.module.css'


const Video = props => {
    
    return(
        <div className = {classes.videoBox}>
    <video  src={videoFl}  className={classes.Video} autoPlay loop muted>
        
    </video>
    </div>
    )
}

export default Video
