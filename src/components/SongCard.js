import React, { useState } from 'react';


const SongCard = ({ song }) => {
    {console.log(song)}
    return (
        <div className="card justify-center">
        <h2 className="text-center">Song name: {song.name}</h2>
        <p className="text-center">Release date: {song.releasedate}</p>
        <img src={song.albumimage} alt="cover-art" className="album-photo mx-auto mb-3 shadow"/>
        </div>
    )
}

export default SongCard
