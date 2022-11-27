import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './pages/Header/Header';
import { Footer } from './pages/Footer/Footer';
import { Home } from './pages/HomePage/Home';
import { Tariffs } from './pages/TariffsPage/Tariffs';
import { Stores } from './pages/StoresPage/Stores';
import { Faq } from './pages/FaqPage/Faq';
import { Contact } from './pages/ContactPage/Contact';
import { Confidentiality } from './pages/ConfidentialityPage/Confidentiality';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <Tariffs />
        <Stores />
        <Faq />
        <Contact />
        <Confidentiality />
      </main>
      <Footer />
    </div>
  );
}

export default App;
