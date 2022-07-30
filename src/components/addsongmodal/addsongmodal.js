import React, { useState, useContext } from "react";
import { ArtistContext } from '../../ArtistContext';


export default function AddSongModal({name}) {
  const [show, setShow] = useState(false);
  const [artist, setArtist] = useContext(ArtistContext);


  async function handleClick(e) {
    setShow(true);
  }

  function closeModal() {
    setShow(false);
  }

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
            <input type="text" className="form-control"></input>
            <br />
            <label>Release Date</label>
            <input type="text" className="form-control"></input>
            <br />
            <label>Album art</label>
            <input type="text" className="form-control"></input>
            <br />
            <label>Youtube url</label>
            <input type="text" className="form-control"></input>
            <br />
            <button type="submit" className="btn btn-primary">Submit Artist</button>
        </form>

    </div>
        </div>
      </div>
    </div>
  );
}
