import './App.css';
import { AccountPage } from './pages/AccountPage/Account';
import { Confidentiality } from './pages/ConfidentialityPage/Confidentiality';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { Home } from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import { Stores } from './pages/StoresPage/Stores';
import { Tariffs } from './pages/TariffsPage/Tariffs';
import React from 'react';

import { OrderingPart } from './components/OrderingPage/OrderingPart';
import { Beyan } from './components/BeyanEtPart/Beyan';
import { Cart } from './components/Cart/Cart';
import { Packages } from './components/Packages/Packages';

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
          <Route path="account-page" element={<AccountPage />}>
            <Route path="ordering-part" element={<OrderingPart />} />
            <Route path="beyan-part" element={<Beyan />} />
            <Route path="cart-part" element={<Cart />} />
            <Route path="packages-part" element={<Packages />} />
          </Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
