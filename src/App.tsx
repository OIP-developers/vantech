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
import WorkMainPage from './pages/WorkMain/WorkMainPage';
import WorkPowerMindsetBreakthroughPage from './pages/WorkPowerMindsetBreakthrough/WorkPowerMindsetBreakthroughPage';
import WorkVanTravelBusinessTwoPage from './pages/WorkVanTravelBusinessTwo/WorkVanTravelBusinessTwoPage';
import WorkOneTapDigitalCardPage from './pages/WorkOneTapDigitalCard/WorkOneTapDigitalCardPage';
import WorkPMBConsultingPage from './pages/WorkPMBConsulting/WorkPMBConsultingPage';
import WorkMightyOakLegacyPage from './pages/WorkMightyOakLegacy/WorkMightyOakLegacyPage';
import WorkSolidRockLeadershipPage from './pages/WorkSolidRockLeadership/WorkSolidRockLeadershipPage';
import WorkBuketiFinancialConsultingPage from './pages/WorkBuketiFinancialConsulting/WorkBuketiFinancialConsultingPage';
import WorkLelofitPage from './pages/WorkLelofit/WorkLelofitPage';
import WorkAllAccessTripPage from './pages/WorkAllAccessTrip/WorkAllAccessTripPage';

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
        <Route path="/work" element={<WorkMainPage />} />
        <Route path="/van-travel-business" element={<WorkVanTravelPage />} />
        <Route path="/power-mindset-breakthrough" element={<WorkPowerMindsetBreakthroughPage />} />
        <Route path="/van-travel-business-two" element={<WorkVanTravelBusinessTwoPage />} />
        <Route path="/onetap-digital-card" element={<WorkOneTapDigitalCardPage />} />
        <Route path="/pmb-consulting" element={<WorkPMBConsultingPage />} />
        <Route path="/mighty-oak-legacy" element={<WorkMightyOakLegacyPage />} />
        <Route path="/solid-rock-leadership-development" element={<WorkSolidRockLeadershipPage />} />
        <Route path="/buketi-insurance-services" element={<WorkBuketiFinancialConsultingPage />} />
        <Route path="/lelofit" element={<WorkLelofitPage />} />
        <Route path="/all-access-trip" element={<WorkAllAccessTripPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
