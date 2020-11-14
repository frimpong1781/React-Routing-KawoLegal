import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/font-awesome.min.css';
import './App.css';
import './Startup.css';
import './Home.css';
import Footer from './components/Footer';
import Router from './Router';

function App() {
  return (
    <div>
        <Router />
        <Footer />
    </div>
  );
}

export default App;
