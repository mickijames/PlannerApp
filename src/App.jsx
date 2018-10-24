import React, { Component } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Footer from './footer/Footer';
import MediaQuery from './MediaQuery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
        <MediaQuery />
      </div>
    );
  }
}

export default App;
