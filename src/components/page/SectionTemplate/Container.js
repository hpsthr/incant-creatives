import React from 'react';

import classes from "./StyleContainer.module.css"

const Left = props => <div style = {{...props.leftstyle}} className = {classes.SecondLeft}>{props.children}</div>
const Right = props => <div style = {{...props.rightstyle}} className = {classes.SecondRight}>{props.children}</div>

export {Left, Right}