import React, { useState, useEffect } from 'react';
const axios = require('axios').default;


const SongCard = ({ song, name }) => {
    // {console.log(song)}
    // {console.log(name)}

    const songNameUrl = song.name.replace(/ /g,"%20");
    const artistNameUrl = name.replace(/ /g,"%20");

    const [ lyrics, setLyrics ] = useState('')


    async function getLyrics() {
        try {
          console.log("Trying to get lyrics");
          const url = `https://api.lyrics.ovh/v1/${artistNameUrl}/${songNameUrl}`;
          console.log(url);
          const response = await axios.get();
          const data = response.json();
          getLyrics(data);
          console.log(data, "This is the response");
        } catch (error) {
          console.error(error);
        }
      }

      useEffect(() => {
          getLyrics();
    }, [])

    return (
        <div className="card justify-center">
        <h2 className="text-center">Song name: {song.name}</h2>
        <p className="text-center">Release date: {song.releasedate}</p>
        <button type="button" class="mx-auto border-0 bg-light" data-toggle="modal" data-target="#exampleModalCenter">
            <img src={song.albumimage} alt="cover-art" className="album-photo mx-auto mb-3 shadow"/>
        </button>
        <div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                <button type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                ...
            </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default SongCard
