import './App.css';
import Header from './component/Header'
import Home from './pages/Home'
import Bottom from './component/Bottom'
import React, { lazy } from 'react';

// const Header = lazy(()=>import('./component/Header'));
// const Home = lazy(()=>import('./pages/Home'));
// const Bottom = lazy(()=>import('./component/Bottom'));


function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <Bottom/>
    </div>
  );
}

export default App;
