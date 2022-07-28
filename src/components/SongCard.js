import React, { useState, useEffect, useRef } from "react";
import Modal from "./modal/Modal";
const axios = require("axios").default;

const SongCard = ({ songName, song, name, releasedate, songimage, yturl}) => {
  const [lyrics, setLyrics] = useState("");
  const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow("modal");

  const songNameUrl = songName.replace(/ /g, "%20");
  const artistNameUrl = name.replace(/ /g, "%20");

  async function getLyrics() {
    try {
      // const url = `https://api.punkapi.com/v2/beers`;
      const url = `https://api.lyrics.ovh/v1/${artistNameUrl}/${songNameUrl}`;
      const response = await axios.get(url);
      setLyrics(response.data.lyrics);

      console.log(response.data.lyrics);
    } catch (error) {
      console.error(error);
      setLyrics("Loading Error :(!");
    }
  }

  async function handleClick(e) {
    console.log("FETCHING LYRICS!");
    setShow(true);
    await getLyrics();
  }

  return (
    <div className="card justify-center">
      <h2 className="text-center">Song name: {songName}</h2>
      <p className="text-center">Release date: {releasedate}</p>
      <button
        type="button"
        className="mx-auto border-0 bg-light"
        // data-toggle={show}
        data-target="#exampleModalCenter"
        onClick={handleClick}
      >
        <img
          src={songimage}
          alt="cover-art"
          className="album-photo mx-auto mb-3 shadow"
        />
      </button>
      {console.log(yturl, "This is the yturl in the songcard!")}
      <Modal
        songLyrics={lyrics}
        setLyrics={setLyrics}
        songName={songName}
        show={show}
        setShow={setShow}
        yturl={yturl}
      />
    </div>
  );
};

export default SongCard;
