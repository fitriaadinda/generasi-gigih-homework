import './App.css';
import React from 'react';
import axios from 'axios';

const App = () => {

  axios
    .get(
      "https://api.spotify.com/v1/browse/new-releases",{
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_SPOTIFY_ACCESS_TOKEN}`
        }
      }
    )
    .then(function (response) {
      console.log(response.data);

      document.getElementById("Images").src = response.data.albums.items[0].images[0].url;
      document.getElementById("track-Title").innerHTML = `Track Title: ${response.data.albums.items[0].name}`
      document.getElementById("track-Artist").innerHTML = `Track Artist: ${response.data.albums.items[0].artists[0].name}`
      document.getElementById("track-Album").innerHTML = `Track Album: ${response.data.albums.items[0].name}`
    })
    .catch(function (error) {
      console.error(error);
    })
    

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
        <img id="Images" src="" alt="" />
        <p id="track-Title"></p>
        <p id="track-Artist"></p>
        <p id="track-Album"></p>
        <button type="button">Select</button>
    </div>
    </div>
  );
}


export default App;