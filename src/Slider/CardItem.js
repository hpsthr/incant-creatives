import React from "react";

const CardItem: React.SFC = ({ title, subtitle, img, style, key }) => (
  <div
    key = {key}
    style={{
      width: window.innerWidth > 765 ?  200 : 160,
      height:  window.innerWidth > 765 ?  310 : 270,
      background: "white",
      color: "black",
      borderRadius: 10,
      boxShadow : "14px 5px 27px grey",
      textAlign: "center",
      display:"flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      ...style
    }}
  >
    <img style ={{ 
      width:"100px",
      height:"100px"
    }} alt="incarn creatives" src = {img}/>
    <h3
    style={{ 
      fontSize:"21px",
      fontFamily:"montserrat",
      fontWeight:"bold"
    }}
    >{subtitle}</h3>
    <p>{title}</p>
  </div>
);

export default CardItem;


