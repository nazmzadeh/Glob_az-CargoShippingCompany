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
          <Route path="/Mağazalar" element={<Stores />} />
          <Route path="/account-page" element={<AccountPage/>} />
          
          
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
