/**
 * @class Fullpage
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FullpageContext from './FullpageContext';
import ContextProp from "../context/ContextProp"
import Aux from "../hoc/Auxillary"



class Fullpage extends PureComponent {
    static contextType = ContextProp
  // static contextType = FullpageContext;


  static propTypes = {
    children: PropTypes.node.isRequired,
    transitionTiming: PropTypes.number,
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])),
    className: PropTypes.string,
    onChange: PropTypes.func,
    keyboardShortcut: PropTypes.bool,
    offScroll:PropTypes.bool
  };

  static defaultProps = {
    transitionTiming: 500,
    style: {
      position: 'fixed',
      top: -1,
      left: 0,
      right: 0,
    },
    className: '',
    onChange: null,
    keyboardShortcut: true,
  };

  constructor(props) {
    super(props);
    this.slides = [];
    this.state = {
      slide: null,
     temSlide:null,
      translateY: 0,
      pageYOffset: 0,
      offsetHeight: 0,
      count: 0,
      slides:null,
      number: 0,
      resetScroll: false,
      clientHeight:0,
      onHover:null,
      
    };
    this.setState = this.setState.bind(this);
    this.ticking = false;
    this.newSlide = null;
    this.viewportHeight = 0;
    this.scrollNow = false
    this.throttle = 600;
    this.time = -1;
    
    
    // binds
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);
    this.update = this.update.bind(this);
    this.getIndex = this.getIndex.bind(this);
    // handle
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleKeys = this.handleKeys.bind(this);
    // refs
    this.driverRef = React.createRef();
    this.warperRef = React.createRef();
    this.fullpageRef = React.createRef();
  }


 


  componentDidMount() {
    
    
      
    this.windowClientHeight = document.documentElement.clientHeight;
    this.driverRef.current.style.height = `${this.state.clientHeight}px`;
    this.handleResize();
    this.setState({
      slide: this.slides[0],
    });

   

    if(!this.props.offScroll){

    if (typeof window !== 'undefined') {
      window.addEventListener('mousewheel',this.handleScroll);
      window.addEventListener('DomMouseScroll',this.handleScroll)
      window.addEventListener('wheel',this.handleScroll)
      window.addEventListener('resize', this.handleResize);
      }

    if (typeof document !== 'undefined') {
      document.addEventListener('keydown', this.handleKeys);
    }}
  }

  

  componentWillUnmount() {
    
    
    
    if (typeof window !== 'undefined') {
      window.removeEventListener('mousewheel',this.handleScroll);
      // window.removeEventListener('mousewheel', this.handleScroll);
      
      window.addEventListener('resize', this.handleResize);
      
    }
    if (typeof document !== 'undefined') {
      document.removeEventListener('keydown', this.handleKeys);
    }
    
  }

  componentDidUpdate(prevProps, prevState) {
    window.addEventListener('mousewheel',this.handleScroll);
      window.addEventListener('wheel',this.handleScroll)
    // window.addEventListener('scroll', this.handleScroll);
    
    this.viewportHeight = Math.max(
      this.windowClientHeight,
      window.innerHeight || 0,
    );
    
      
    
  this.windowClientHeight = document.documentElement.clientHeight;
  this.setState({
      clientHeight:this.fullpageRef.current.clientHeight
    }) 
    this.driverRef.current.style.height = `${this.state.clientHeight}px`;
    
  
    
    

    
  }

  getIndex(slide) {
    
    return this.slides.indexOf(slide);
  }

  subscribe(slide) {
    // add new slide (push)
    this.newSlides = [...this.slides, slide];

    
    // sort slide for top to bottom
    this.slides = this.newSlides.sort((a, b) => {
      const aTop = a.el.current.offsetTop;
      const bTop = b.el.current.offsetTop;
      return aTop - bTop;
    });
    this.setState({
      count: this.slides.length,
      
    });
    this.ticking = false;
    this.handleResize();
    return slide;
  }

  unsubscribe(slide) {
    this.slides = this.slides.filter(s => s.el !== slide.el);
    this.setState({
      count: this.slides.length,
    });
    this.handleResize();
    
    return slide;
  }

 

  handleScroll(e) {
    let dY = e.deltaY
    this.transitionTiming = this.props.transitionTiming
    const now = Date.now();
 
    if (this.time !== -1 && now - this.time < this.throttle) return; 
    this.time = now;


    

    if(!this.context.backDrop){
      
      // if(!this.ticking) return;
            if(dY >= 25){
              dY = 25
            return this.next()
            }
            if(dY <= -25){
              dY = 25
             return this.back()
            }}
            
          
         
    //   if(fancyScroll === this.newSlide){
    //     newSlide = fancyScroll
    //     }

    //     if(fancyScroll !== this.newSlide){
    //       newSlide = this.slides.find((slide) => {
    //         return pageYOffset < slide.el.current.offsetTop + (slide.el.current.offsetHeight * 0.5)  ;
    //          })
    //     }
    // this.transitionTiming = this.props.transitionTiming
    // if(!this.context.backDrop){
    
    // if (this.lockScroll) {
    //   // if > top and bottom < fix scroll
    //   window.scrollTo(0, translateY * -1 );
      
    //   return false;
    // }
    // if (!this.ticking) {
    //   window.requestAnimationFrame(() => {
        
    //     this.goto(newSlide)
    //     if (resetScroll) {window.scrollTo(0, translateY * -1 );}
    //     this.setState({pageYOffset,resetScroll: false,});
        
    //     this.ticking = false;
    //   });
    //   }
    this.ticking = true;
    
    return true; 

    
    
  }

 
  handleResize() {
    // 
    
    if (!this.ticking) {
      window.requestAnimationFrame(() => {
        // update count
        
        this.ticking = false;
        this.setState({translateY:this.viewportHeight * - this.state.number})
        this.transitionTiming = 0
      });
    }
    
    this.ticking = true;
  }

  handleKeys(event) {
    const {
      keyboardShortcut,
    } = this.props;
    this.transitionTiming = this.props.transitionTiming
    if (!keyboardShortcut) {
      return true;
    }

    if (
      event.keyCode === 33 // pageUp:    33,
      || event.keyCode === 37 // left:      37,
      || event.keyCode === 38 // up:        38,
    ) {
      event.preventDefault();
      return (event.shiftKey) ? this.first(event) : this.back(event);
    }
    if (
      event.keyCode === 34 // pageDown:  34,
      || event.keyCode === 39 // right:     39,
      || event.keyCode === 40 // down:      40,
    ) {
      event.preventDefault();
      return (event.shiftKey) ? this.last(event) : this.next(event);
    }
    if (
      event.keyCode === 35 // end:       35,
    ) {
      event.preventDefault();
      return this.last(event);
    }
    if (
      event.keyCode === 36 // home:      36,
    ) {
      event.preventDefault();
      return this.first(event);
    }

    return true;
  }

  // TODO: add update methode
  update() {
    return this;
  }
  updateHover(num) {
    this.setState({onHover:num})
    // console.log(num);
  }

  offUpdateHover(){
    this.setState({onHover:null})
  }



  goto(newSlides, resetScroll = false) {

    
let newSlide = newSlides

// this.newSlides = newSlide
    if(newSlide === undefined){
      return ;
    } 
    const {
      slide,
    } = this.state;
    const {
      transitionTiming,
      onChange,
    } = this.props;
    
    if (slide !== newSlide) {
      const translateY = Math.max(
        (this.state.clientHeight - this.viewportHeight) * -1,
        newSlide.el.current.offsetTop * -1,
      );
      const {
        onHide,
      } = slide.props;

      if (onHide && typeof onHide === 'function') {
        setTimeout(() => onHide(translateY), transitionTiming);
      }

      this.lockScroll = true;

      this.setState({
        slide: newSlide,
        number: this.getIndex(newSlide),
        translateY,
        offsetHeight: newSlide.el.current.offsetHeight,
        resetScroll,
      });
      

      const {setNumber} = this.context
      setNumber(this.getIndex(newSlide))

      setTimeout(() => {
        this.lockScroll = false;
      }, 500);
      const {
        onShow,
      } = newSlide.props;
      if (onShow && typeof onShow === 'function') {
        onShow(translateY);
      }
      // call back function
      if (typeof onChange === "function") {
        onChange(this.state);
      }
    }
    this.newSlide = newSlide
    return newSlide;
    
  }
  gotoSlide(num){
    
    
    const index = Math.max(0, num)
    this.goto(this.slides[index], true);
  }

  back() {
    const {
      number,
    } = this.state;
    const index = Math.max(0, number - 1);
    this.goto(this.slides[index], true);
  }

  next() {
    const {
      length,
    } = this.slides;
    const {
      number,
    } = this.state;
    const index = Math.min(length - 1, number + 1);
    this.goto(this.slides[index], true);
  }

  first() {
    this.goto(this.slides[0], true);
  }

  last() {
    this.goto(this.slides[this.slides.length - 1], true);
  }

  render() {
    
    const {
      children,
      style,
      className,
      
    } = this.props;
// console.log("at RENDER");
    const {
      translateY,
      pageYOffset,
      offsetHeight,
      number,
      count,
      onHover,

    } = this.state;

    return (
      <Aux>
      {/* <ContextProp.Provider value = {{number}}>
      </ContextProp.Provider> */}
      <FullpageContext.Provider
        value={{
          translateY,
          pageYOffset,
          offsetHeight,
          number,
          count,
          onHover,
          gotoSlide:this.gotoSlide,
          state:this.updateHover.bind(this),
          stateOff:this.offUpdateHover.bind(this),
          subscribe: this.subscribe,
          unsubscribe: this.unsubscribe,
          update: this.update,
          goto: slide => this.goto(slide),
          back: this.back,
          next: this.next,
          getIndex: this.getIndex,
          transitionTiming:this.transitionTiming,
          className,
          style,
          warperRef: this.warperRef,
          fullpageRef: this.fullpageRef,
          slides: this.slides,
          scrollHandle : this.handleScroll,
          
        }}
      >
        <div
          name="Driver"
          id={'doc-ment'}
          style={{
            position: 'relative',
            
          }}
          ref={this.driverRef}
          
        >

        {children}
        </div>
      </FullpageContext.Provider>
      </Aux>
      
    );
  }
}

export default Fullpage;
