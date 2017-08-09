import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import MainSection from '../components/PlatformMain'

import * as AjaxAction from '../actions/ajaxAction'

import './../../css/pages/app.css'


const App = ({orders, actions,results}) => (
  <div>
    <Header/>
    <MainSection orders={orders} actions={actions}  submitAction={actions.submit}/>
  </div>
)

App.propTypes = {
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
)(App)
