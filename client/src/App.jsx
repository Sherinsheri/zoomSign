import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Signup from './Signup';
import Home from './Home';
import Signin from './Signin';
import JoinRoom from './components/JoinRoom';
import PeerTest from './components/PeerTest'; // ✅ Add this line

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<JoinRoom />} />
        <Route path="/peer-test" element={<PeerTest />} /> {/* ✅ Add this route */}
      </Routes>
    </Router>
  );
}
