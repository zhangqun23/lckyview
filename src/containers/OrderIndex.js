import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Header from '../components/Header'
import MainSection from '../components/MainOrderSection'
import ResultList from '../components/ResultList'
import * as AjaxAction from '../actions/ajaxAction'

import './../../css/pages/modify.css'


const App = ({orders, actions,results}) => (
  <div>
    <Header/>
    <MainSection orders={orders} actions={actions}  submitAction={actions.submit}/>
    <ResultList results = {results}/>
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
