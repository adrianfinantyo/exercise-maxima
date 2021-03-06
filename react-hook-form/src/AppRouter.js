import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import Welcome from "./pages/Welcome"
import FormulirPendaftaran from "./pages/FormulirPendaftaran"
import Playground from "./pages/Playground"

const AppRouter = () => {
    return(
        <Router>
            <Switch>
                <Route path='/welcome' component={Welcome}></Route>
                <Route path='/daftar' component={FormulirPendaftaran}></Route>
                <Route path='/playground' component={Playground}></Route>
                <Route path='/' component={Home}></Route>
            </Switch>
        </Router>
    )
}

export default AppRouter