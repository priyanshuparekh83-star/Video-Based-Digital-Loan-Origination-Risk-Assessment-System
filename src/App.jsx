import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './views/Dashboard'
import CustomerEntry from './views/CustomerEntry'
import VideoCallInterface from './views/VideoCallInterface'
import RiskAssessment from './views/RiskAssessment'
import OfferGeneration from './views/OfferGeneration'

import './App.css'

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/campaign" element={<CustomerEntry />} />
          <Route path="/session/:id/video" element={<VideoCallInterface />} />
          <Route path="/session/:id/risk" element={<RiskAssessment />} />
          <Route path="/session/:id/offer" element={<OfferGeneration />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
