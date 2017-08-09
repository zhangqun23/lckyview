import React, { Component } from 'react'
import { Router, Route, Redirect, IndexRoute, Link, IndexLink, browserHistory, hashHistory } from 'react-router'
import $ from 'jquery'

import './../utils/jquery'
import './../utils/layer'
import './../utils/H-ui'
import './../utils/H-ui.admin.page'

import OrderIndex from './../containers/OrderIndex'
import Todo from './../containers/Todo'
import Platform from './../containers/PlatformIndex'
import TravelIndex from './../containers/TravelIndex'

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
const platform=(location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./../containers/PlatformIndex').default)
},'platform')
}
const travelIndex=(location,cb)=>{
    require.ensure([],require=>{
        cb(null,require('./../containers/TravelIndex').default)
    },'travelIndex')
}

const history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Roots}>
            <IndexRoute component={OrderIndex} />
            <Route path="Todo" getComponent={todo} />
             <Route path="Platform" getComponent={platform} />
              <Route path="TravelIndex" getComponent={travelIndex} />
            <Redirect from='*' to='/' />
        </Route>
    </Router>
);

export default RouteConfig;