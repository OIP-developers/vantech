import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import PartnersPage from './pages/Partners/PartnersPage';
import ContactPage from './pages/Contact/ContactPage';
import AIAgentsPage from './pages/AIAgents/AIAgentsPage';
import AIAutomationPage from './pages/AIAutomation/AIAutomationPage';
import WorkVanTravelPage from './pages/WorkVanTravel/WorkVanTravelPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/ai-agents" element={<AIAgentsPage />} />
        <Route path="/ai-automation" element={<AIAutomationPage />} />
        <Route path="/van-travel-business" element={<WorkVanTravelPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
