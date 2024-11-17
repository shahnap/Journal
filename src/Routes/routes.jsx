import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from '../Dashboard/Dashboard';
import Pages from '../pages/pages.jsx';
import Login from '../Auth/Login.jsx';



function Routers() {
  return (
   <Router>
     <Routes>
     <Route path="/" exact element={<Login />} />
       <Route path="/dashboard" exact element={<Dashboard />} />
       <Route path="/Pages" exact element={<Pages />} />
{/*  */}
     
     </Routes>
   </Router>
  )
}

export default Routers