import React from 'react';
import { useState } from 'react';
import '../style/style.css';

const SongItem = () => {

    const [status,setStatus] = useState(false)

    const showAlert = () => {
        setStatus(!status)
        console.log(status)
    }

    let button;
    if (status === false){
        button = <button className="button add-btn" onClick={showAlert}>Add</button>
    } else {
        button = <button className="button add-btn" onClick={showAlert}>Deselect</button>
    }

    return (
        <div className="itemContainer">
            {button}
        </div>
);
}

export default SongItem;