import './App.css';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { Home } from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import { Stores } from './pages/StoresPage/Stores';
import { Tariffs } from './pages/TariffsPage/Tariffs';
import React from 'react';
import { SideNavBar } from './components/SideNavBar/SideNabBar';
import { AccountPage } from './pages/AccountPage/Account';
import { Confidentiality } from './pages/ConfidentialityPage/Confidentiality';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/tarifler" element={<Tariffs />} />
          <Route path="/Magazalar" element={<Stores />} />
          <Route path="/Mexfilik" element={<Confidentiality />} />
          <Route path="/account-page" element={<AccountPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
