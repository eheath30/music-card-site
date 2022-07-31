import React, { useState, useEffect, useContext } from "react";
import { ArtistContext } from '../../ArtistContext';


const Modal = ({ songLyrics, setLyrics, songName, show, setShow, yturl, loading}) => {
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

let loadingGiphy = <iframe src="https://c.tenor.com/0iK9a1WkT40AAAAC/loading-white.gif" width="500" height="600" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>


  return (
    <div id="myModal" className={`modal songModal ${show ? "showModal" : "hideModal"}`}>
      <div class="modal-content">
        <span onClick={closeModal} class="close">
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
