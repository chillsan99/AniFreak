import React from 'react';
import Home from './Pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AniHome from './Pages/AniHome';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Home />}/>
        <Route path = "/anime" element={<AniHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
