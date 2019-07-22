import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Link
} from "react-router-dom";

import Project1 from './projects/Project1'
import Project2 from './projects/Project2'
import Project3 from './projects/Project3'

export default class Projects extends Component {
    render() {
        return(
            <Router>
                <div>
                    <h1>Projects</h1>
                    <ol>
                        <li><Link to="/project1/">Project 1</Link></li>
                        <li><Link to="/project2/">Project 2</Link></li>
                        <li><Link to="/project3/">Project 3</Link></li>
                    </ol>
                    <Route path="/project1/" component={ Project1 } />
                    <Route path="/project2/" component={ Project2 } />
                    <Route path="/project3/" component={ Project3 } />
                </div>
            </Router>
        )
    }
}
