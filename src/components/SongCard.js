import React, { useState, useEffect } from 'react';
const Modal = require('./modal/Modal')

const SongCard = ({ song, name, releasedate, songimage }) => {


    return (
        <div className="card justify-center">
        <h2 className="text-center">Song name: {song}</h2>
        <p className="text-center">Release date: {releasedate}</p>
        <button type="button" class="mx-auto border-0 bg-light" data-toggle="modal" data-target="#exampleModalCenter">
            <img src={songimage} alt="cover-art" className="album-photo mx-auto mb-3 shadow"/>
        </button>
        <Modal />

        </div>
    )
}

export default SongCard
