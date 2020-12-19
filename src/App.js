import React from 'react';
import './App.css';
import './Props.css';
import HomePage from './comps/Home';
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './comps/Header';
import Footer from './comps/Footer';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" component={HomePage} />
    <Footer/>
    </BrowserRouter>

  );
}

export default App;
