import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateShortUrl, ReadShortUrl } from './components';
import reportWebVitals from './reportWebVitals';
import './styles/index.css';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<CreateShortUrl />} />
        <Route path="/:shortUrl" element={<ReadShortUrl />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();
