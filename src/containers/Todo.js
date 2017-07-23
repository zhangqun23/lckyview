import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import * as AjaxAction from '../actions/ajaxAction'

import './../../css/pages/modify.css'


const App1 = ({orders, actions,results}) => (
  <div>
    <Header/>
  </div>
)

App1.propTypes = { 
  orders: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  orders: state.orders,
  results:state.results
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(AjaxAction, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App1)
