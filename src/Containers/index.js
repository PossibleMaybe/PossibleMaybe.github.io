import React, {Component} from 'react';
import {Link,} from 'react-router-dom';

import Header from './home/header';
import HeaderRight from './components/header-right';
import TabAreas from './home/tab-areas';

class Index extends Component {
    render() {
        return (
            <div>
                <Header headerRight= {<HeaderRight />} />
                <TabAreas />
            </div>
        )
    }
}

export default Index;