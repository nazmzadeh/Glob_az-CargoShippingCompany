import './App.css';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { Home, cards } from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import { Stores } from './pages/StoresPage/Stores';
import { Tariffs } from './pages/TariffsPage/Tariffs';
import React from 'react';
import { SideNavBar } from './components/SideNavBar/SideNabBar';
import { AccountPage } from './pages/AccountPage/Account';
import { Confidentiality } from './pages/ConfidentialityPage/Confidentiality';
import { AllNews } from './pages/HomePage/components/News/components/AllNews';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*    <Route path="messages" element={<DashboardMessages />} />
            <Route path="tasks" element={<DashboardTasks />} />
          </Route> */}
          <Route path="/tarifler" element={<Tariffs />} />
          <Route path="/Magazalar" element={<Stores />} />
          <Route path="/Mexfilik" element={<Confidentiality />} />
          <Route path="/account-page" element={<AccountPage/>} />
          <Route path="/all-news" element={<AllNews cards={cards} />} />
        </Routes>
        {/* <Tariffs />
        
        <Stores />
        <Faq />
        <Contact />
        <Confidentiality /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
