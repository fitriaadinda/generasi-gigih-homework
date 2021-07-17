const Navbar = () =>{
    return(
        <div>
            <div className="nav flex-column nav-pills" role="tablist" aria-orientation="vertical">
                <a className="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-home" aria-selected="true">...</a>
                <a className="nav-link active" data-toggle="pill" role="tab" aria-controls="v-pills-home"
                    aria-selected="true">Home</a>
                <a className="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-profile"
                    aria-selected="false">Profile</a>
                <a className="nav-link" data-toggle="pill" role="tab" aria-controls="v-pills-messages" aria-selected="false">Create
                    Playlist</a>
            </div>
        </div>
    );
}

export default Navbar;