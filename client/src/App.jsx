import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import SignIn from './Signin';
import Home from './Home';
import Signin from './Signin';
import JoinRoom from './components/JoinRoom';

export default function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/join" element={<JoinRoom />} />
      </Routes>
    </Router>
  );
}
