import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Resources from './pages/Resources';
import RightsAndBenefits from './pages/RightsAndBenefits';
import BehaviorTools from './pages/BehaviorTools';
import Community from './pages/Community';
import Help from './pages/Help';
import Concerns from './pages/Concerns';
import Diagnosis from './pages/Diagnosis';
import PostDiagnosis from './pages/PostDiagnosis';
import Ongoing from './pages/Ongoing';
import PrivacyAndTerms from './pages/PrivacyAndTerms';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div dir="rtl" className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/rights" element={<RightsAndBenefits />} />
          <Route path="/tools" element={<BehaviorTools />} />
          <Route path="/community" element={<Community />} />
          <Route path="/help" element={<Help />} />
          <Route path="/concerns" element={<Concerns />} />
          <Route path="/diagnosis" element={<Diagnosis />} />
          <Route path="/post-diagnosis" element={<PostDiagnosis />} />
          <Route path="/ongoing" element={<Ongoing />} />
          <Route path="/privacy-terms" element={<PrivacyAndTerms />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;