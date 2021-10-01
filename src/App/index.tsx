import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'

import './styles.scss'

import { Navbar } from './Components/Navbar'

import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Games } from './Pages/Games'
import { NotFound } from './Pages/NotFound'

export const App = () => {
    return (
        <Router>
            <Navbar />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/games" component={Games} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}