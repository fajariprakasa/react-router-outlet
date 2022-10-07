import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="blog" element={<h1>Blog Page</h1>} />
        <Route path="setting" element={<h1>Setting Page</h1>} />
      </Route>
    </Routes>
  );
}
