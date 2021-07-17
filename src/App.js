import './App.css';
import data from './Data';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar';
import Playlist from './Components/playlist';
import React from 'react';

const App = () => {
  const playlistMusic = data.map(data =>
  <Playlist key={data.album.id} url={data.album.images[1].url} title={data.album.name} artist={data.album.artists[0].name}
    album={data.album.name} />
  );

  return (
    <div className="container-fluid">
      <div className="row" style={{height: "587px"}}>
        <div className="col" style={{backgroundColor: "black"}}>
          <Navbar />
        </div>
        <div className="col-7" style={{backgroundColor: "rgba(27, 25, 25, 0.815)"}}>
          <h1 style={{paddingTop: "30px"}}>Playlist</h1>
          <table className="table" style={{color: "white"}}>
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Title</th>
                <th scope="col">Artist</th>
                <th scope="col">Album</th>
              </tr>
            </thead>
            {playlistMusic }
          </table>
        </div>
        <div className="col" style={{backgroundColor: "rgb(27, 25, 25)", padding: "20px"}}>
          <p style={{color: "white"}}>Friend Activity</p>
        </div>
      </div>
    </div>
  );
}

export default App;