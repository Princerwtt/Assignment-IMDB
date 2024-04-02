import React from 'react';
import './App.css';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Cards from './Cards';
import MovieList from './MovieList'
import TopRated from "./TopRated"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
       <Navigation/>
       <Routes>
             <Route path='/' element={<Cards/>}/>     
             <Route path='/movie/:id' element={<MovieList/>}/>
             <Route path='top-rated' element={<TopRated/>}/>
             <Route path='/*' element={<h1>This is error Page</h1>}/>
       </Routes>
    </BrowserRouter>
   
    </div>
  );
}

export default App;