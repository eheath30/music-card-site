import React, { useState, useContext } from 'react';
import { ArtistContext } from '../../ArtistContext';

const NewCardPage = () => {
    const [ image, setImage ] = useState('');
    const [ name, setName ] = useState('');
    const [ genre, setGenre ] = useState('');
    const [ description, setDescription ] = useState('');
    // const [ songs, setSongs ] = useState([]);
    const [artist, setArtist] = useContext(ArtistContext);

    function handleName (e) {
        setName(e.target.value);
    }

    function handleImage (e) {
        setImage(e.target.value);
    }

    function handleGenre (e) {
        setGenre(e.target.value);
    }

    function handleDescription (e) {
        setDescription(e.target.value);
    }

    function handleSubmit (e) {
        e.preventDefault();
        console.log(artist);
        setArtist(artist => [...artist, {artistimage: image, name: name, genre: genre, description: description, id: (artist.length + 1), songs: []}])
    }



    return (
<div>
        <form>
            <label>Name</label>
            <input type="text" onChange={handleName}></input>
            <br />
            <label>Image</label>
            <input type="text" onChange={handleImage}></input>
            <br />
            <label>Genre</label>
            <input type="text" onChange={handleGenre}></input>
            <br />
            <label>Description</label>
            <input type="text" onChange={handleDescription}></input>
            <br />
            <button onClick={handleSubmit}>Submit Artist</button>
        </form>
    </div>
    )
}

export default NewCardPage;
