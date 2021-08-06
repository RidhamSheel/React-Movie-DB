import React from 'react';

//Routing
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Styles
import {GlobalStyle} from './GlobalStyle';

//Components
import { Header } from './components/Header/header';
import { Home } from "./components/home";
import { Movie } from './components/Movie';
import { NotFound } from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/:movieId" element = {<Movie />}/>
        <Route path = "/*" element = {<NotFound />} />
      </Routes>
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
