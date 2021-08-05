import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import CreateLogin from './Components/createLogin';
import SideBar from './Components/sideBar';
import axios from 'axios';
import React from 'react';
import './style/style.css';
import ButtonSelect from './Components/buttonSelect';

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
    console.log(result);
    this.setState({
      tracks: result.data.tracks.items,
    });
  }


  render(){
    return (
      <div style={{backgroundColor: "black", width: "100%"}} >
        <CreateLogin />
        <div style={{paddingTop: "20px", width: "100%"}}>
          <SideBar />
          <div className="content">
              <div style={{padding: "20px 50px"}}>
                <input className="search-input" type="text" onChange={this.handleSearch} placeholder="Search Songs" />
                <button className="button btn-search" onClick={this.handleClick}>Search</button>
              </div>
              <div class="parent">
                {
                  this.state.tracks.map((data, index) => {
                    return (
                      <div class="card">
                        <img src={data.album.images[1].url} alt={data.name} style={{width: "75%"}}/>
                        <h4>{data.name}</h4>
                        <p>{data.artists[0].name}</p>
                        <ButtonSelect />
                      </div>
                    );
                  })
                }
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;