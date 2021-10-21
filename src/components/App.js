import React, { Component } from 'react'
import Menu from "./Menu"
import About from "./About"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }
    }
    render() {
        return (
            <>
              <Menu />
              <About />  
            </>
        )
    }
}