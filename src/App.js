import React from 'react';
import './App.css';
import { Toaster } from 'react-hot-toast';
import Portfolio from './portfolio';

function App() {
  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <Portfolio />
    </>
  );
}

export default App;
