import './App.css';
import { Footer } from './pages/Footer/Footer';
import { Header } from './pages/Header/Header';
import { Home} from './pages/HomePage/Home';
import { Route, Routes } from 'react-router-dom';
import { Stores } from './pages/StoresPage/Stores';
import { Tariffs } from './pages/TariffsPage/Tariffs';
import React from 'react';
import { SideNavBar } from './components/SideNavBar/SideNabBar';
import { AccountPage } from './pages/AccountPage/Account';
import { Confidentiality } from './pages/ConfidentialityPage/Confidentiality';
import { AllNews } from './pages/HomePage/components/News/components/AllNews';
import { Trenchcoat } from './pages/HomePage/components/News/components/OrderTrenchcoatFromTurk/Trenchcoat';
import { ChildrensClothing } from './pages/HomePage/components/News/components/ChildrensClothing/ChildrensClothing';
import { SportClothing } from './pages/HomePage/components/News/components/SportClothing/SportClothing';
import { OrderClothing } from './pages/HomePage/components/News/components/OrderClothing/OrderClothing';
import { FraudCases } from './pages/HomePage/components/News/components/Fraud/ChildrensClothing';

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
          <Route path="/all-news" element={<AllNews />} />
          <Route path="/trench-coat" element={<Trenchcoat/>} />
          <Route path="/all-news/trench-coat" element={<Trenchcoat/>} />
          <Route path="/ushaq-geyimleri" element={<ChildrensClothing/>} />
          <Route path="/all-news/ushaq-geyimleri" element={<ChildrensClothing/>} />
          <Route path="/idman-geyimleri" element={<SportClothing/>} />
          <Route path="/all-news/idman-geyimleri" element={<SportClothing/>} />
          <Route path="/paltar-sifarishi" element={<OrderClothing/>} />
          <Route path="/all-news/paltar-sifarishi" element={<OrderClothing/>} />
          <Route path="/all-news/firildaqchiliq" element={<FraudCases/>} />
          <Route path="/all-news/firildaqchiliq" element={<FraudCases/>} />

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
