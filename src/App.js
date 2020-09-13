import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" >
          {/* Menu */}
          <nav className="navbar navbar-inverse">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/#">Homepage</a>
              </li>
              <li>
                <a href="/#">About</a>
              </li>
            </ul>
          </nav>

          {/* Content */}
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
