import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/navbar';
import axios from 'axios';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      tracks: [],
    };
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
    })
  }

  handleClick = async (e) => {
    const search = window.location.hash.substr(1);
    const params = new URLSearchParams(search);
    const accessToken = params.get('access_token');
    
    const config = {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    }

    const result =  await axios.get(`https://api.spotify.com/v1/search?q=${this.state.search}&type=track`, config)
    
    this.setState({
      tracks: result.data.tracks.items,
    });
  }


  render(){
    return (
      <div className="container-fluid">
        <div className="row" style={{height: "587px"}}>
          <div className="col" style={{backgroundColor: "black"}}>
            <Navbar />
          </div>
          <div className="col-7" style={{backgroundColor: "rgba(27, 25, 25, 0.815)"}}>
            <h1 style={{paddingTop: "30px"}}>Search Song</h1>
            <input type="text" onChange={this.handleSearch} />
            <button onClick={this.handleClick}>Search</button>
            <table className="table" style={{color: "white"}}>
              <thead className="thead-light">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Artist</th>
                  <th scope="col">Album</th>
                </tr>
              </thead>
              <tbody>
                  {
                    this.state.tracks.map((data, index) => {
                      return (
                        <tr>
                          <th scope="row">{index + 1}</th>
                          <td>{data.name}</td>
                          <td>{data.artists[0].name}</td>
                          <td>{data.album.name}</td>
                        </tr>
                      );
                    })
                  }
              </tbody>
            </table>
          </div>
          <div className="col" style={{backgroundColor: "rgb(27, 25, 25)", padding: "20px"}}>
            <p style={{color: "white"}}>Friend Activity</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;