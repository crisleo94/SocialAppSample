import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
// ROUTES
import Home from './pages/Home'
import Register from './pages/Register'

import 'semantic-ui-css/semantic.min.css'
import './App.scss'

export default function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/register" component={Register} />
    </Router>
  )
}
