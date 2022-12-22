import './App.css';
import { Confidentiality } from './pages/ConfidentialityPage/Confidentiality';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { Home } from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import { Stores } from './pages/StoresPage/Stores';
import { Tariffs } from './pages/TariffsPage/Tariffs';
import React from 'react';
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

          <Route path="tarifler" element={<Tariffs />} />
          <Route path="Magazalar" element={<Stores />} />
          <Route path="Mexfilik" element={<Confidentiality />} />
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
