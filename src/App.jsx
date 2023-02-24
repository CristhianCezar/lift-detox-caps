import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import About from './components/about/About';
import Article from './components/description/Article';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <About />
      <Article />
      <Contact />
      <Footer/>
    </div>
  );
}
