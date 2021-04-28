import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Welcome from "./pages/Welcome"
import GetName from "./pages/GetName"

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/welcome'>
                    <Welcome />
                </Route>
                <Route path='/get-name/:name'>
                    <GetName />
                </Route>
                <Route path='/'>
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter