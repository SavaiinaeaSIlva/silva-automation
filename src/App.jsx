import React from 'react';
import { Routes, Route } from 'react-router-dom';

// --- IMPORT YOUR PAGES HERE ---
import Home from './pages/HomePage'; // Example
import Legal from './pages/Legal'; // <--- ADD THIS LINE

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Your existing routes */}
        <Route path="/" element={<Home />} />
        
        {/* --- ADD THIS LINE --- */}
        <Route path="/legal" element={<Legal />} />
        
      </Routes>
    </div>
  );
}

export default App;