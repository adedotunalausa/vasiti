import React from 'react';
import './App.css';
import Navbar from './components/Navbar'
import About from './components/about/About'
import Footer from './components/Footer'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
      <About />
      <Footer />
    </div>
  );
}

export default App;
