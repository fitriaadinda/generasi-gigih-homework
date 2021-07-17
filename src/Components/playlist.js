const Playlist = ({url, title, artist, album}) =>{
    return(
        <tbody>
            <tr>
                <th scope="row"></th>
                <td><img className="img" src={url} alt={title} /></td>
                <td>{title}</td>
                <td>{artist}</td>
                <td>{album}</td>
            </tr>
        </tbody>
    );
}

export default Playlist;