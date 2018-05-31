import React, {PureComponent} from 'react';

export default class First extends PureComponent {
  componentDidMount() {
    alert('first did mount');
  }
  componentWillMount() {
    alert('first will mount');
  }
  componentWillReceiveProps() {
    alert('first will receive props');
  }
  shouldComponentUpdate(next, current) {
    debugger;
    alert('first should update');
    return true;
  }
  render() {
    console.log('first render');
    let {text} = this.props;
    return (
      <div> {text}</div>
    )
  }
}