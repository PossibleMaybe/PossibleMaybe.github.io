import React, {PureComponent} from 'react';

export default class Second extends PureComponent {
  componentDidMount() {
    alert('second did mount');
  }
  componentWillMount() {
    alert('second will mount');
  }
  componentWillReceiveProps() {
    alert('second will receive props');
  }
  shouldComponentUpdate(next, current) {
    if(JSON.stringify(next) === '{}') return false;
  }
  render() {
    console.log('second render');
    return (
      <div> second</div>
    )
  }
}