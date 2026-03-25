
import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import About from './components/About';
import { HashRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
  
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<News key="general" max={9} category="general"/>} />
          <Route exact path='/business' element={<News key="business" max={9} category="business"/>} />
          <Route exact path='/entertainment' element={<News key="entertainment" max={9} category="entertainment"/>} />
          <Route exact path='/health' element={<News key="health" max={9} category="health"/>} />
          <Route exact path='/science' element={<News key="science" max={9} category="science"/>} />
          <Route exact path='/sports' element={<News key="sports" max={9} category="sports"/>} />
          <Route exact path='/technology' element={<News key="technology" max={9} category="technology"/>} />
          
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
    );
  }
}



