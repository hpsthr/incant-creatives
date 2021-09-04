/* eslint-disable react/static-property-placement */
/**
 * @class FullpageNavigation
 */
// eslint-disable-next-line react/react-in-jsx-scope
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FullpageContext from './FullpageContext';


// TODO: do navigation
// eslint-disable-next-line react/prefer-stateless-function
class FullpageNavigation extends PureComponent {
  static contextType = FullpageContext;

  state = {
    event:null
  }


  static defaultProps = {
    style: {},
    itemStyle: {},
    
    // reverse: false,
    // text:{}
  };

  static propTypes = {
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])),
    itemStyle: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])),
    // reverse: PropTypes.bool,
    text:PropTypes.string,
  };

  render() {
    const { style, itemStyle, name, spanStyle, traY} = this.props;
    
    const {
      number, slides, transitionTiming, state, onHover, stateOff, 
    } = this.context;

    let text = null;
    if(number >= 0)
    {text = name[number]}

    let hText = null
    if(onHover >= 0)
    {if (onHover === number)
        { hText = null}
        else {hText = name[onHover]}}


    const gotoSlide = (slide, i) => {
      
        
      const { goto } = this.context;
      goto(slide);
      slides.index = number
      // scrollHandle()
      // this.setState({event:slide.index})
      
    };

    
// console.log(this.props.type);
    const displayName = (slide) => { 
      // this.setState({event:slide.index})
     state(slide.index)

      }
    const exitName = (slide) => { 
      // this.setState({event:null})
      stateOff(null)
      }
    
    

    return (
      <div style={
        window.innerWidth > 760 ?
        {
        position: 'fixed',
        transition: '0.2s ease',
        zIndex: 100,
        top: "32vh",
        right: 0,
        cursor:"default",
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        paddingRight: '1em',
        ...style,
      }
    :
    {
      position: 'fixed',
        transition: '0.2s ease',
        zIndex: 100,
        bottom:0,
        right: -30,
        width:"100vw",
        height:"8vh",
        cursor:"default",
        listStyleType: 'none',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'center',
        alignContent: 'flex-start',
        alignItems:'center',
        background: "white",
        ...style,
    }
    }
      >
        {
          slides.map((slide, i) => (
            <div
              key={i.toString()}
              
            >
              <div
                style={
                  window.innerWidth > 760 ?
                  {
                  
                  border: "solid 1px red",
                  backgroundColor:(number === i) ? "red" : "transparent" ,
                   width:"24px", 
                   height:"24px", 
                   borderRadius:"50%",
                   cursor:"pointer",
                   margin: 8,
                   overflow:"hidden",
                  // margin: (number === i) ? 3 : 5,
                  // backgroundColor: (reverse) ? "red" : "transparrent",
                  // opacity: (number === i) ? 1 : 0,
                  transition: `all ${transitionTiming * 0.5}ms ease-in-out`,
                  ...itemStyle,
                }:
                {
                  
                  border: "solid 1px red",
                  backgroundColor:(number === i) ? "red" : "transparent" ,
                   width:(number === i) ?"26px" : "18px", 
                   height:(number === i) ?"26px" : "18px", 
                   borderRadius:"50%",
                  margin:  "0 8px",
                   
                   
                  // margin: (number === i) ? 3 : 5,
                  // backgroundColor: (reverse) ? "red" : "transparrent",
                  // opacity: (number === i) ? 1 : 0,
                  transition: `all ${transitionTiming * 0.5}ms ease-in-out`,
                  ...itemStyle,
                }
              
              }
              onClick={() => {gotoSlide(slide); console.log(slide.index)}}
                onMouseOver={() => displayName(slide)}
                onMouseOut={() => exitName(slide)}
                onKeyPress={() => gotoSlide(slide, i)}
                role="button"
                tabIndex="-1"
                aria-label={`Slide ${i}`}
              >
                <div 
                style ={{
                  
                  
                  overflow: 'hidden'
                }}
                >
                <span id ={`slide number ${i}`} style={
                  
                  window.innerWidth > 760 ?
                  {
                  // display:(number === i) ? "flex" : "none", 
                  overflow: 'hidden',
                  flexWrap:' nowrap',
                  flexDirection: 'row',
                  alignContent: 'stretch',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  position:"absolute",
                  transition: '0.5s ease',
                  cursor:"default",
                  width:"150px",
                  textAlign: 'right',
                  fontSize:"13px",
                  fontFamily:"montserrat",
                  
                  
                  transform: (number === i) ? `translate(-176px ,${traY? traY :"3px"} )` :`translate(45px, ${traY? traY: "3px"})` ,
                  // right:  ? "81px" : "-10px", 
                  opacity: (number === i) ? "1" : "0", 
                  ...spanStyle
                }:
                {
                  display:(number === i) ? "flex" : "none", 
                 
                  flexWrap:' nowrap',
                  flexDirection: 'column',
                  alignContent: 'stretch',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  position:"absolute",
                  transition: '0.5s ease',
                  cursor:"default",
                  
                  textAlign: 'center',
                  fontSize:"10px",
                  fontFamily:"montserrat",
                  
                  
                  transform: (number === i) ? `translate(0, -18px)` :`translate(0, 4px)` ,
                  // right:  ? "81px" : "-10px", 
                  opacity: (number === i) ? "1" : "1", 
                  ...spanStyle
                

              }}>
                  {text}
                  
                </span>
                </div>
                <div 
                style ={{
                  
                  
                  overflow: 'hidden'
                }}
                >
                <span id ={`slide number ${i}`} style={
                  window.innerWidth > 760 ?
                  {
                  // display:(number === i) ? "flex" : "none", 
                  overflow: 'hidden',
                  flexWrap:' nowrap',
                  flexDirection: 'row',
                  alignContent: 'stretch',
                  alignItems: 'flex-start',
                  justifyContent: 'flex-end',
                  width:"150px",
                  transition: '0.5s ease',
                  cursor:"default",
                  position:"absolute",
                  fontSize:"13px",
                  textAlign: 'right',
                  fontFamily:"montserrat",
                  
                  
                  transform: (onHover === i) ? `translate(-176px , ${traY? traY :"3px"})` :`translate(45px, ${traY? traY :"3px"})` ,
                  // right:  ? "81px" : "-10px", 
                  opacity: (onHover === i) ? "1" : "0", 
                  ...spanStyle
                  
                }
              :
              {
                display:"none"
              }
              }
                >
                  {hText}
                  
                </span>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    );
  }
}

export default FullpageNavigation;
