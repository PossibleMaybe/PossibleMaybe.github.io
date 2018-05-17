import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import Index from './../Containers/index';
import Detail from './../Containers/detail';
import Introduce from './../Containers/introduce';

class BaseRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" component={Index}></Route>
                    <Route path="/detail" component={Detail}></Route>
                    <Route path="/introduce" component={Introduce}></Route>
                </Switch>
            </div>
        )
    }
}


export default BaseRouter