import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import News from './component/News';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () =>{

  const apiKey = '1508a4c8d165499f8946cd29efba5848';

  const pageSize = 8;
  const [progress,setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" category="general" country="in" />}></Route>
            <Route exact path='/business' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="business" category="business" country="in" />}></Route>
            <Route exact path='/entertainment' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="entertainment" category="entertainment" country="in" />}></Route>
            <Route exact path='/general' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="general" category="general" country="in" />}></Route>
            <Route exact path='/health' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="health" category="health" country="in" />}></Route>
            <Route exact path='/science' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="science" category="science" country="in" />}></Route>
            <Route exact path='/sports' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="sports" category="sports" country="in" />}></Route>
            <Route exact path='/technology' element={<News setProgress={setProgress} apiKey={apiKey} pageSize={pageSize} key="technology" category="technology" country="in" />}></Route>
          </Routes>
        </Router>
      </div>
    )
}

export default App;