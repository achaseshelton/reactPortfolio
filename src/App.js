import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Menu from "./components/Menu"
import About from "./pages/About"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Onboarding from "./pages/Onboarding"

export default function App() {

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
                <Route path="/onboarding">
                    <Onboarding />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}