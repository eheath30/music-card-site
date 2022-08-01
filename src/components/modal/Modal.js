import React, { useState, useEffect, useContext } from "react";
import { ArtistContext } from '../../ArtistContext';


const Modal = ({ songLyrics, setLyrics, songName, show, setShow, yturl, loading, key}) => {
  const [artist, setArtist] = useContext(ArtistContext);


  function closeModal() {
    setLyrics("");
    setShow(false);
  }

// change youtube url to embeded url for embedding
let url = "";
if (yturl.includes("&")) {
  url = yturl.split('&')[0]
} else {
  url = yturl
}

let embededURL = url.replace("watch?v=", "embed/")

let loadingGiphy = <iframe title="loading-gif" src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
// todo: currently an error when a user types a fake video address, the modal will see it as a bad address and send the user back to the home page... however this happens inside the modal! Fixes: could change error route handling || could create a custom error page/message for modal (how?) || or...?

  return (
    <div key={key} id="myModal" className={`modal songModal ${show ? "showModal" : "hideModal"}`}>
      <div className="modal-content">
        <span onClick={closeModal} className="close">
          &times;
        </span>
        <span className="display-4 mx-auto">{songName}</span>
        <div className="containerInModal">

        <iframe className="mx-auto my-4 rounded video" width="560" height="315" src={embededURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <h2 className="display5 text-center mt-5">Lyrics</h2>

        <div className="container text-center mb-5 lyrics-in-the-modal h-100">{loading ? loadingGiphy : songLyrics}</div>

      </div>
    </div>

  );
};

export default Modal;
