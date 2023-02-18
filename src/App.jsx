import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';

export default function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <About/>
    </div>
  );
}
