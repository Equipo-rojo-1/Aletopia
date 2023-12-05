import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Calendar from './Calendar';

export default function App() {
  return (
    
    <Routes>
      <Route path="/Calendar" element={<Calendar />} />
    </Routes>
  );
  
}