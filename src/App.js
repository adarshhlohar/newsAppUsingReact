import './App.css';

import React, { Component } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  apiKey = '1508a4c8d165499f8946cd29efba5848';

  pageSize = 8;
  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" category="general" country="in" />}></Route>
            <Route exact path='/business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="business" category="business" country="in" />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="entertainment" category="entertainment" country="in" />}></Route>
            <Route exact path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="general" category="general" country="in" />}></Route>
            <Route exact path='/health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="health" category="health" country="in" />}></Route>
            <Route exact path='/science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="science" category="science" country="in" />}></Route>
            <Route exact path='/sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="sports" category="sports" country="in" />}></Route>
            <Route exact path='/technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} pageSize={this.pageSize} key="technology" category="technology" country="in" />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}

