import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/Home/HomePage';
import AboutPage from './pages/About/AboutPage';
import PartnersPage from './pages/Partners/PartnersPage';
import ContactPage from './pages/Contact/ContactPage';
import AIAgentsPage from './pages/AIAgents/AIAgentsPage';
import AIAutomationPage from './pages/AIAutomation/AIAutomationPage';
import AutoPilotPage from './pages/AutoPilot/AutoPilotPage';
import ModelDevelopmentPage from './pages/ModelDevelopment/ModelDevelopmentPage';
import MVPDevelopmentPage from './pages/MVPDevelopment/MVPDevelopmentPage';
import WebApplicationsPage from './pages/WebApplications/WebApplicationsPage';
import MobileApplicationPage from './pages/MobileApplication/MobileApplicationPage';
import SaasDevelopmentPage from './pages/SaasDevelopment/SaasDevelopmentPage';
import CustomDevelopmentPage from './pages/CustomDevelopment/CustomDevelopmentPage';
import EcommerceDevelopmentPage from './pages/EcommerceDevelopment/EcommerceDevelopmentPage';
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
        <Route path="/auto-pilot" element={<AutoPilotPage />} />
        <Route path="/model-development" element={<ModelDevelopmentPage />} />
        <Route path="/mvp-development" element={<MVPDevelopmentPage />} />
        <Route path="/web-applications" element={<WebApplicationsPage />} />
        <Route path="/mobile-application" element={<MobileApplicationPage />} />
        <Route path="/saas-development" element={<SaasDevelopmentPage />} />
        <Route path="/custom-development" element={<CustomDevelopmentPage />} />
        <Route path="/ecommerce-development" element={<EcommerceDevelopmentPage />} />
        <Route path="/van-travel-business" element={<WorkVanTravelPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
