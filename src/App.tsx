import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import Login from './page/auth/Login';
import AdminDashboard from './page/admin/AdminDashboard';

function App() {
  return (
    <Router>
      <Header/>
      <Banner/>
      <Routes>
         <Route path="/" element={< Login/>}/>
         <Route path="/login" element={< Login/>}/>
         <Route path="/adminDashboard" element={< AdminDashboard/>}/>
      </Routes>
    </Router>
  );
}

export default App;
