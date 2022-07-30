import React, { useState, useEffect } from "react";
const Modal = ({ songLyrics, setLyrics, songName, show, setShow, yturl }) => {
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

console.log(embededURL)




  return (
    <div id="myModal" className={`modal  ${show ? "showModal" : "hideModal"}`}>
      <div class="modal-content">
        <span onClick={closeModal} class="close">
          &times;
        </span>
        <span className="display-4 mx-auto">{songName}</span>
        <iframe className="mx-auto my-4 rounded" width="560" height="315" src={embededURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>{songLyrics}</div>
      </div>
    </div>
  );
};

export default Modal;
