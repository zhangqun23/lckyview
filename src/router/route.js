import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import $ from 'jquery'

import './../utils/jquery'
import './../utils/layer'
import './../utils/H-ui'
import './../utils/H-ui.admin.page'

import OrderIndex from './../containers/OrderIndex'
import Todo from './../containers/Todo'

 import './../../css/fonts/iconfont.css'
 import './../../css/font.css'
 import './../../css/weui.min.css'
 import './../../css/jquery-weui.min.css'
 import './../../css/mui.css'  
 import './../../css/animate.css'     
 


class Roots extends Component {
    
    render() {
        return (
            <div>
               {this.props.children}
            </div>
        );
    }
}


const orderIndex = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../containers/OrderIndex').default)
    }, 'orderIndex')
}

const todo = (location, cb) => {
    require.ensure([], require => {
        cb(null, require('./../containers/Todo').default)
    }, 'todo')
}


const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={OrderIndex} />
            <Route path="Todo" getComponent={todo} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;