import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calendar from './Calendar';

export function App() {
  return (
    <Routes>
      <Route path="/calendar" element={<div><Calendar /></div>} />
    </Routes>
  );
}

export default App;