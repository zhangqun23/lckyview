import React, { Component } from "react"
import { render } from 'react-dom'
import { connect } from 'react-redux'
export class Header extends Component {
    componentWillMount() {
    }
    render() {
        return (
             <div className="titlebar reverse"> 
                <h1>洛川客运</h1>
            </div>
        )
    }
}

export default connect()(Header)