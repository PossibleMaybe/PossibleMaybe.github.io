import React, {Component} from 'react';

export default class HeaderRight extends Component {
  render() {
    return (
      <div>
        <p className='download-app' style={styles['download-app']}>下载APP</p>
      </div>
    )
  }
} 

let styles = {
  'download-app': {
    position: 'relative',
    display: 'inline-block',
    height: '30px',
    lineHeight: '30px',
    padding: '0 10px',
    color: '#fff',
    fontSize: '15px' ,
    border: '1px solid rgba(155,255,255,.1)',
    borderRadius: '4px',
  }
}