import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
import Comic from './pages/Comic';
import './styles/style.css';

const App: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/comic" element={<Comic />} />
        </Routes>
    </Router>
);

export default App;
