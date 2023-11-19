import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />

          <Routes>
            <Route exact path='/' element={<News pageSize={8} key="general" category="general" country="in" />}></Route>
            <Route exact path='/business' element={<News pageSize={8} key="business" category="business" country="in" />}></Route>
            <Route exact path='/entertainment' element={<News pageSize={8} key="entertainment" category="entertainment" country="in" />}></Route>
            <Route exact path='/general' element={<News pageSize={8} key="general" category="general" country="in" />}></Route>
            <Route exact path='/health' element={<News pageSize={8} key="health" category="health" country="in" />}></Route>
            <Route exact path='/science' element={<News pageSize={8} key="science" category="science" country="in" />}></Route>
            <Route exact path='/sports' element={<News pageSize={8} key="sports" category="sports" country="in" />}></Route>
            <Route exact path='/technology' element={<News pageSize={8} key="technology" category="technology" country="in" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

