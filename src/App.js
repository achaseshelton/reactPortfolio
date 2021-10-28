import React, { Component } from 'react'
import { Router, Switch, Route } from 
import Menu from "./components/Menu"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: 0
        }
    }
    render() {
        return (
            <Router>
                <Menu />
                <Switch>
                    <Route path="/about">
                    <About />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </Router>
        )
    }
}