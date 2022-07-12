import React  from 'react';
import './App.css';
import MovieList from './components/movie-list/index.js';
import 'h8k-components';
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const TRACKING_ID = "UA-234218352-1"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

const title = "Movie List";

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  });

  return (
    <div>
      <h8k-navbar header={title} />
      <MovieList/>
    </div>
  );
}

export default App;
