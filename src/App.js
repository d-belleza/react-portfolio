import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Navigation></Navigation>
      <Project></Project>
      <Footer></Footer>
    </div>
  );
}

export default App;
