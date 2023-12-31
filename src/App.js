import React from 'react';
import Home from './components/Home';
import BeforeDigital from './components/BeforeDigital';
import Digital from './components/Digital';
import FrontendProjects from './components/FrontendProjects';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/before-digital" element={<BeforeDigital />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/frontend-projects" element={<FrontendProjects />} />
      </Routes>
    </Router>
  );
}

export default App;
