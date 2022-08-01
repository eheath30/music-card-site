import React, { useState} from "react";
// todo: should use useEffect and useRef in project somehow
import Modal from "./modal/Modal";
const axios = require("axios").default;

const SongCard = ({ songName, song, name, releasedate, songimage, yturl }) => {
  const [lyrics, setLyrics] = useState("");
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true)
  const songNameUrl = songName.replace(/ /g, "%20");
  const artistNameUrl = name.replace(/ /g, "%20");

  async function getLyrics() {
    try {
      setLoading(true);
      const url = `https://api.lyrics.ovh/v1/${artistNameUrl}/${songNameUrl}`;
      let cancel
      axios.get(url, {
        cancelToken: new axios.CancelToken(c => cancel = c)
      }).then(res => {
        setLoading(false)
      setLyrics(res.data.lyrics);
      });
    } catch (error) {
      console.error(error);
      setLyrics("❌ Loading Error ❌ (The API can take a long time to get the lyrics)");
    }
  }

  async function handleClick(e) {
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
        data-target="#exampleModalCenter"
        onClick={handleClick}
      >
        <img
          src={songimage}
          alt="cover-art"
          className="img img-fluid album-photo mx-auto h-auto mb-3 shadow"
        />
      </button>
      {/* {console.log(yturl, "This is the yturl in the songcard!")} */}
      <Modal
        songLyrics={lyrics}
        setLyrics={setLyrics}
        songName={songName}
        show={show}
        setShow={setShow}
        yturl={yturl}
        loading={loading}
      />
    </div>
  );
};

export default SongCard;
