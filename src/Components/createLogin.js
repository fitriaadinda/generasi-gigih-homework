import '../style/style.css';

const CreateLogin = () =>{
    const handleClick = () =>{
        let scope = encodeURIComponent('playlist-modify-private');
        let redirect_uri = encodeURIComponent('http://localhost:3000');
        
        window.location.href = `https://accounts.spotify.com/authorize?response_type=token&client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&scope=${scope}&redirect_uri=${redirect_uri}`;
    }

    return(
        <div className="login-btn">
            <button className="button" onClick={handleClick}>Create Login</button>
        </div>
    );
}

export default CreateLogin;