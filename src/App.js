import React  from 'react';
import './App.css';
import MovieList from './components/movie-list/index.js';
import 'h8k-components';
import { useEffect } from 'react';
import ReactGA from 'react-ga';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Prueba from './components/prueba/Prueba';

const TRACKING_ID = "UA-234218352-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const title = "Movie List";

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
    ReactGA.set({ dimension14: 'Sports' });
    ReactGA.pageview('/prueba');
    ReactGA.pageview('/');
  });

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/prueba' element ={<Prueba />}></Route>
          <Route path='/' element = {<MovieList/>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
