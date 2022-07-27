import React, { useState, useEffect, useContext } from "react";
import Header from "./header/header";
import Main from "./main/main";
import Image from "./image/image";
import "../App.css";
import SongCard from "./SongCard";
import Hr from './hr/hr'
import { ArtistContext } from "../ArtistContext";

const Card = () => {
  const [artists, setArtists] = useContext(ArtistContext)

  const renderArtists = () =>
    artists.map((artist, index) => (
      <>
      <div className="card mx-auto my-3 p-2 mainCard shadow ">
        <Image key={index} alt={artist.name} artistimage={artist.artistimage} />
        <Header key={index} name={artist.name} genre={artist.genre} />
        <Main key={index} description={artist.description} />

        {artist.songs.map((song, index) => {
          return (
          <div className="mx-5 py-2">
            <SongCard key={index} song={song.name} releasedate={song.releasedate} songimage={song.albumimage} name={artist.name}/>
          </div>
          )
        })}
      </div>
      <div className="justify-content-center w-100">
      <Hr />
      </div>
      </>
    ));

  return (
  <>{renderArtists()}</>
  )
};

export default Card;
