import React, {Component} from 'react';
import {themeColor} from './../color/index';

import HeaderSvg from './../svg/header-svg';
export default class Header extends Component {
  constructor(props) {
    super(props);
    let {headerRight} = props;
    this.state = {
      headerRight,
    }
  }
  render() {
    return (
      <div style={{height: '64px',}}>
        <header className='m-homeheader' style={styles['m-homeheader']}>
        <div className='m-hometop' style={styles['m-hometop']}>
          <HeaderSvg />
        </div>
        {this.state.headerRight}
      </header>
      </div>
      
    )
  }

}
let styles = {
  'm-homeheader': {
    position:'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    width: '100%',
    height: '64px',
    padding: '0 10px',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    background: themeColor,
  },
  'm-hometop': {
    width: '142px',
    height: '29px',
  }
}