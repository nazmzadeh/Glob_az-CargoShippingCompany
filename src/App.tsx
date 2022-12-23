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

import { Beyan } from './components/BeyanEtPart/Beyan';
import { Cart } from './components/Cart/Cart';
import { OrderingPart } from './components/OrderingPage/OrderingPart';
import { Packages } from './components/Packages/Packages';

import { AllNews } from './pages/HomePage/components/News/components/AllNews';
import { ChildrensClothing } from './pages/HomePage/components/News/components/ChildrensClothing/ChildrensClothing';
import { FraudCases } from './pages/HomePage/components/News/components/Fraud/FraudCases';
import { OrderClothing } from './pages/HomePage/components/News/components/OrderClothing/OrderClothing';
import { SportClothing } from './pages/HomePage/components/News/components/SportClothing/SportClothing';
import { Trenchcoat } from './pages/HomePage/components/News/components/OrderTrenchcoatFromTurk/Trenchcoat';
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
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/trench-coat" element={<Trenchcoat />} />
          <Route path="/all-news/trench-coat" element={<Trenchcoat />} />
          <Route path="/ushaq-geyimleri" element={<ChildrensClothing />} />
          <Route path="/all-news/ushaq-geyimleri" element={<ChildrensClothing />} />
          <Route path="/idman-geyimleri" element={<SportClothing />} />
          <Route path="/all-news/idman-geyimleri" element={<SportClothing />} />
          <Route path="/paltar-sifarishi" element={<OrderClothing />} />
          <Route path="/all-news/paltar-sifarishi" element={<OrderClothing />} />
          <Route path="/all-news/firildaqchiliq" element={<FraudCases />} />
          <Route path="/all-news/firildaqchiliq" element={<FraudCases />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
