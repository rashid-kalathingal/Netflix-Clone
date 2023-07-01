import React from 'react';
import './App.css';
import {orginals, action , trendings ,Comedy,Horror,Documentaries,Romance} from './urls'
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPost from './components/RowPost/RowPost';




function App() {
  return (
    <div>
  <NavBar />
  <Banner />
  <RowPost url={trendings} title = 'trendings' />
  <RowPost url={orginals} title ='Netflix Originals'/>
  <RowPost url={action} title = 'Action' issize/>
  <RowPost url={Comedy} title = 'Comedy' issize/>
  <RowPost url={Horror} title = 'Horror' issize/>
  <RowPost url={Romance} title = 'Romance' issize/>
  <RowPost url={Documentaries} title = 'Documentaries' issize/>
    </div>
   
  );
}

export default App;
