import React, {Component} from 'react';

import First from './first';
import Second from './second';

class TabAreas extends Component {
  state = {
    text: 'hello',
  };
  render() {
    return (
      <div>
        <p onClick={() => {this.setState({text: 'world'})}}>button</p>
        <First text={this.state.text} />
        <Second />
      </div>
    )
  }
}


export default TabAreas;