import React from 'react'
import classes from "./CloseButton.module.css"

const CloseButton = ({click, style}) => {

    return(
        
        <a href style= {{...style}} onClick={click} className={classes.closeButton}>
        <div className={classes.in}>
          <div className={classes.closeButtonBlock}></div>
          <div className={classes.closeButtonBlock}></div>
        </div>
        <div className={classes.out}>
          <div className={classes.closeButtonBlock}></div>
          <div className={classes.closeButtonBlock}></div>
        </div>
      </a>
    )
}

export default CloseButton;