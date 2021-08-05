import React from 'react';
import { useState } from 'react';

const SongItem = () => {

    const [status,setStatus] = useState(false)

    const showAlert = () => {
        setStatus(!status)
        console.log(status)
    }

    let button;
    if (status === false){
        button = <button className="selectButton" onClick={showAlert}>Select</button>
    } else {
        button = <button className="deselectButton" onClick={showAlert}>Deselect</button>
    }

    return (
        <div className="itemContainer">
            {button}
        </div>
);
}

export default SongItem;