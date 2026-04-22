# Video-Based Digital Loan Origination & Risk Assessment System

This repository contains the frontend MVP for the **Agentic AI Video Call-Based Onboarding** system (Problem Statement 3). 

This futuristic, high-fidelity mock-up demonstrates an end-to-end digital loan origination journey designed to reduce drop-offs, mitigate fraud risks, and capture precise contextual data using a live video interaction channel.

## 🌟 Key Features

The system replicates a complex AI-driven intelligence layer integrated into a seamless loan officer command center:

- **Campaign Entry & Secure Links**: Generate unique session links dispatched via SMS, WhatsApp, or Email to start the onboarding process.
- **Advanced Video Interface**: A mock "live feed" that simulates capturing the customer's video and geolocation.
- **Computer Vision Overlay**: Visualizes real-time metrics including Age Estimation, Face/ID Match validity, and Liveliness confidence scores.
- **Speech-to-Text (STT) Intelligence**: A live, scrolling conversational transcript acts as an auditable consent trail and extracts context automatically.
- **Contextual Auto-Fill**: Parses the STT interactions (e.g., employment, income, consent intent) and dynamically auto-fills the officer's reference form.
- **Risk & Policy Engine**: Replicates consuming internal bureau data against an LLM-driven intelligence layer to gauge sentiment, loan intent, and risk propensity.
- **Dynamic Offer Generation**: Triggers tailored, personalized loan offers based on the assessment outputs, ready for instant customer dispatch.

## 🛠 Tech Stack

Built for maximum aesthetic impact and real-time frontend performance:
- **Framework**: [Vite](https://vitejs.dev/) + [React](https://reactjs.org/) (JavaScript)
- **Routing**: `react-router-dom`
- **Styling**: Vanilla CSS implementing a custom **Glassmorphism & Neon** design system.
- **Icons**: `lucide-react`

## 📁 Application Structure

```text
├── index.html           # Main entry document and font imports
├── vite.config.js       # Vite build configuration
└── src/
    ├── main.jsx         # App initialization and strict mode wrapper 
    ├── index.css        # Global CSS variables, animations, and glass panel styles
    ├── App.jsx          # Routing configuration shell
    ├── components/
    │   └── Sidebar.jsx  # Main application navigation
    └── views/
        ├── Dashboard.jsx            # Command center and analytics
        ├── CustomerEntry.jsx        # Campaign trigger and link generation
        ├── VideoCallInterface.jsx   # Core video, CV overlays, and live STT
        ├── RiskAssessment.jsx       # LLM intelligence metrics and Bureau data
        └── OfferGeneration.jsx      # Final loan permutations and actions
```

## 🚀 Getting Started Locally

To experience the interactive, futuristic interface locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone or navigate** into the project directory:
   ```bash
   cd path/to/V3.HACK
   ```

2. **Install all dependencies:**
   ```bash
   npm install react-router-dom lucide-react
   ```
   *(If you run into issues, a simple `npm install` should resolve standard Vite packages based on `package.json`).*

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the Application:**
   Open your browser and navigate to `http://localhost:5173`. We highly recommend keeping your browser in full-screen to best appreciate the glassmorphic aesthetics.

---
*Disclaimer: This is a frontend demonstration mock-up. Back-end pipelines including actual LLM orchestration (e.g., GPT-4 Turbo), genuine physical camera STT integrations, and actual bureau API endpoints are mocked via React state flows to demonstrate the target UX.*
