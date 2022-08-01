import React, { useState, useContext, useEffect } from "react";
import { ArtistContext } from "../../ArtistContext";
const LOCAL_STORAGE_KEY = "musicApp.artists";

const NewCardPage = () => {
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");
  // const [ songs, setSongs ] = useState([]);
  const [artists, setArtists] = useContext(ArtistContext);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(artists));
  }, [artists]);

  function handleName(e) {
    setName(e.target.value);
  }

  function handleImage(e) {
    setImage(e.target.value);
  }

  function handleGenre(e) {
    setGenre(e.target.value);
  }

  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setArtists((prevArtist) => [
      ...prevArtist,
      {
        id: artists.length + 1,
        artistimage: image,
        name: name,
        genre: genre,
        description: description,
        songs: [],
      },
    ]);
    document.getElementById("submitArtistForm").reset();
  }

  return (
    <div className="container card mx-auto py-5 my-5 shadow-sm h-100">
      <h1 className="display-4 text-center pb-5">Add a new Artist!</h1>
      <form className="form-group w-50  mx-auto" id="submitArtistForm">
        <label>Name</label>
        <input
          type="text"
          onChange={handleName}
          className="form-control"
        ></input>
        <br />
        <label>Image</label>
        <input
          type="text"
          onChange={handleImage}
          className="form-control"
        ></input>
        <br />
        <label>Genre</label>
        <input
          type="text"
          onChange={handleGenre}
          className="form-control"
        ></input>
        <br />
        <label>Description</label>
        <input
          type="text"
          onChange={handleDescription}
          className="form-control"
        ></input>
        <br />
        <button
          type="submit"
          onClick={handleSubmit}
          className="btn btn-primary"
        >
          Submit Artist
        </button>
      </form>
    </div>
  );
};

export default NewCardPage;
