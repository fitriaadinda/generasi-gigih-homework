const Playlist = ({url, title, artists, album}) =>{
    return(
        <div>
            <div className="card">
                <img id="Images" src={url} alt={title} />
                <p id="track-Title">Track Tittle: {title} </p>
                <p id="track-Artist">Track Artist: {artists} </p>
                <p id="track-Album">Track Album: {album}</p>
                <button type="button">Select</button>
            </div>
        </div>
    );
}

export default Playlist;