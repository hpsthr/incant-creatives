/**
 * @class FullPageSections
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import FullpageContext from './FullpageContext';

class FullPageSections extends PureComponent {
  static contextType = FullpageContext;

  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.objectOf(PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.bool,
    ])),
  };

  static defaultProps = {
    className: '',
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
    },
  };


  render() {
    const {
      children,
      style,
      className,
    } = this.props;
    return (
      <FullpageContext.Consumer>
        {
          ctx => (
            <div
              name="Warper"
              style={ctx.style} // from
              ref={this.warperRef}
            >

              <div
                name="Inner"
                className={className}
                id = {"inner-dom"}
                style={{
                  transition: `transform ${ctx.transitionTiming}ms ease`,
                  ...style,
                  transform: `translate(0, ${(ctx.translateY)}px)`,
                }}
                ref={ctx.fullpageRef}
              >
                { children }
              </div>
            </div>
          )
        }
      </FullpageContext.Consumer>
    );
  }
}

export default FullPageSections;
