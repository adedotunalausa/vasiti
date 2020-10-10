import React from 'react';
import './App.css';
import Header from './components/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Stories from './components/stories/Stories'
import Contact from './components/contact/Contact'
import Footer from './components/Footer'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/stories" exact component={Stories} />
          <Route path="/contact" exact component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
