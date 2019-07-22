import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom'
import {
    // We import BrowserRouter because we are routing between web pages rendered in a browser.
    BrowserRouter as Router,
    Route,
    // This is to create links for our users to click on.
    Link,
    Switch
} from "react-router-dom";
// Here are our individual page components. They get rendered the same as any other component inside of the router
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Project1 from './pages/projects/Project1'
import Project2 from './pages/projects/Project2'
import Project3 from './pages/projects/Project3'
import Contact from './pages/Contact'
// When using Switch, we can also specify a default route that always matches last by creating a Route that has no path. That way, we're sure to at least show the user something. This route will match when the user goes to an URL that is not found.
import NotFound from './pages/NotFound'

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about/">About</Link>
                            </li>
                            <li>
                                <Link to="/skills/">Skills</Link>
                            </li>
                            <li>
                                <Link to="/projects/">Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact/">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    // the Switch component will only match one route
                        <Switch>
                        // Routes have a path, and a component prop. The path specifies a matcher for the browsers URL, and the component prop specifies the component to render when there is a match.
                            <Route path="/" exact component={ Home } />
                            <Route path="/about/" exact component={ AboutUs } />
                            <Route path="/skills/" component={ Skills } />
                            <Route path="/projects/" component={ Projects } />
                            <Route path="/contact" component={ Contact } />
                            <Route component={ NotFound } />
                        </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
