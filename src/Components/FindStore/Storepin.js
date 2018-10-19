import React, {Component} from 'react';
import ReactSvg from 'react-svg'

const pinStyle = {
  cursor: 'pointer',
  fill: '#d00',
  stroke: 'none'
};

export default class Storepin extends Component {

  render() {
    const {size = 20, onClick} = this.props;
    
    return (
      <svg height={size} viewBox='0 0 24 24'
        style={{...pinStyle, transform: `translate(${-size/2}px,${-size}px)`}}
        onClick={onClick} >
      </svg>
    );
  }
}
