import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- IMPORT YOUR PAGES HERE ---
import Home from './pages/HomePage'; // Example
import Legal from './pages/Legal'; // <--- ADD THIS LINE
import LegalLayout from './pages/legal/LegalLayout';
import { FileText, Shield, DollarSign, Cookie } from 'lucide-react';
import Terms from './pages/legal/Terms';
import Privacy from './pages/legal/Privacy';
import Refunds from './pages/legal/Refunds';
import Cookies from './pages/legal/Cookies';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<Home />} />
        
        {/* --- ADD THIS LINE --- */}
        <Route path="/legal" element={<Legal />} />
        
        {/* Individual legal policy pages */}
        <Route path="/legal/terms" element={<LegalLayout title="Terms and Conditions" icon={FileText}><Terms /></LegalLayout>} />
        <Route path="/legal/privacy" element={<LegalLayout title="Privacy Policy" icon={Shield}><Privacy /></LegalLayout>} />
        <Route path="/legal/refunds" element={<LegalLayout title="Refund & Cancellation Policy" icon={DollarSign}><Refunds /></LegalLayout>} />
        <Route path="/legal/cookies" element={<LegalLayout title="Cookie Policy" icon={Cookie}><Cookies /></LegalLayout>} />
        
      </Routes>
    </div>
  );
}

export default App;