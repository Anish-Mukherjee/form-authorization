import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard'
import Login from './components/Login/Login'
import Preferences from './components/Preferences/Preferences'

const App = () => {

    const [token,setToken] = useState()

    if (!token){
        return <Login setToken={setToken} />
    }

    return (
        <div>
            <h1>Application</h1>
            <Router>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/preferences">
                        <Preferences />
                    </Route>
                </Switch>
            </Router>
            <Login />
        </div>
    )
}

export default App
