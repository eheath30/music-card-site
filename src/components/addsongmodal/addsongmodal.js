import React, { useState, useContext } from "react";
import { ArtistContext } from '../../ArtistContext';


export default function AddSongModal({name}) {
  const [show, setShow] = useState(false);
  const [ songName, setSongName ] = useState('');
  const [ ReleaseDate, setReleaseDate ] = useState('');
  const [ AlbumArt, setAlbumArt ] = useState('');
  const [ YoutubeURL, setYoutubeURL ] = useState('');

  const [artist, setArtist] = useContext(ArtistContext);

  async function handleClick(e) {
    setShow(true);
  }
  function closeModal() {
    setShow(false);
  }


  function handleSongName (e) {
    setSongName(e.target.value);
}

function handleReleaseDate (e) {
    setReleaseDate(e.target.value);
}

function handleAlbumArt (e) {
    setAlbumArt(e.target.value);
}

function handleYoutubeURL (e) {
  setYoutubeURL(e.target.value);
}


// function handleSubmit (e) {
//   e.preventDefault();
//   console.log(artist);
//   setArtist(artist => [...artist, {albumimage: image, name: songName, genre: genre, description: description, id: (artist.length + 1), songs: []}])
//   document.getElementById("submitArtistForm").reset();
// }

// function handleSubmit (e) {
//   e.preventDefault();
//   // console.log(artist);
//   setArtist(artist => artist.songs({
//     ...artist.songs,
//     albumimage: AlbumArt,
//     name: songName,
//     releasedate: ReleaseDate,
//     songurl: YoutubeURL
//   }))
// }


  return (
    <div className="card justify-center my-2">
      <button
        type="button"
        className="btn-lg btn-light mx-auto border-0 bg-light"
        data-target="#exampleModalCenter"
        onClick={handleClick}
      >
        Add a New Song
      </button>
      <div
        id="myModal"
        className={`modal  ${show ? "showModal" : "hideModal"}`}
      >
        <div class="modal-content">
          <span onClick={closeModal} class="close">
            &times;
          </span>

          <div className="container mx-auto py-5">
    <h1 className="display-4 text-center pb-5">Add a new Song by {name}!</h1>
        <form className="form-group w-50  mx-auto">
            <label>Song Name</label>
            <input type="text" className="form-control"
            // onChange={handleSongName}
              ></input>
            <br />
            <label>Release Date</label>
            <input type="text" className="form-control"
            // onChange={handleReleaseDate}
              ></input>
            <br />
            <label>Album art</label>
            <input type="text" className="form-control"
            // onChange={handleAlbumArt}
              ></input>
            <br />
            <label>Youtube url</label>
            <input type="text"
            // onChange={handleYoutubeURL}
              className="form-control"></input>
            <br />
            <button
            // onClick={handleSubmit}
             className="btn btn-primary">Submit Artist</button>
        </form>

    </div>
        </div>
      </div>
    </div>
  );
}
