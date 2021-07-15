import './App.css';
// import axios from 'axios';
import data from './Data';
import FormAddPlaylist from './Components/formAddPlaylist';
import ListMusic from './Components/listmusic';
import React from 'react';

const App = () => {

  return ( 
    <div className="App">
      <h1>CREATE PLAYLIST</h1>
      <FormAddPlaylist />
      <ListMusic url={data.album.images[1].url} title={data.album.name} artits={data.album.artists[0].name} album={data.album.name}/>
    </div>
  );
}

export default App;