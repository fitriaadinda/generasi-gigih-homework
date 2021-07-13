import './App.css';
import React from 'react';
import data from './Data';
// import axios from 'axios';

const App = () => {
    
  return ( 
    <div>
      <h1>CREATE PLAYLIST</h1>
      <form>
        <div>
          <label>Title</label>
          <input type="text"></input>
        </div>
        <div>
          <label>Deskripsi</label>
          <input type="text"></input>
        </div>
        <button type="button" onclick="">Submit</button>
      </form>
      <div className="card">
        <img id="Images" src={data.album.images[1].url} alt="" />
        <p id="track-Title">Track Tittle: {data.album.name}</p>
        <p id="track-Artist">Track Artist: {data.album.artists[0].name}</p>
        <p id="track-Album">Track Album: {data.album.name}</p>
        <button type="button">Select</button>
    </div>
    </div>
  );
}

export default App;