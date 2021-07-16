import './App.css';
// import axios from 'axios';
import data from './Data';
import FormAddPlaylist from './Components/formAddPlaylist';
import Playlist from './Components/playlist';
import React from 'react';

const App = () => {

  return ( 
    <div className="App">
      <h1>CREATE PLAYLIST</h1>
      <FormAddPlaylist />
      <Playlist url={data.album.images[1].url} title={data.album.name} artists={data.album.artists[0].name} album={data.album.name}/>
    </div>
  );
}

export default App;