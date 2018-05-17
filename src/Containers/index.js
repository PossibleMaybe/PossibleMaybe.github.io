import React, {Component} from 'react';
import {Link,} from 'react-router-dom';

class Index extends Component {
    render() {
        return (
            <div>
                <Link to="/">首页</Link>
                <Link to="/detail">详情</Link>
                <Link to="/introduce">介绍</Link>
            </div>
        )
    }
}

export default Index;