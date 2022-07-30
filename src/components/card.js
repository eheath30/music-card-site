import React, { useState, useEffect, useContext } from "react";
import Header from "./header/header";
import Main from "./main/main";
import Image from "./image/image";
import "../App.css";
import SongCard from "./SongCard";
import Hr from "./hr/hr";
import { ArtistContext } from "../ArtistContext";
import AddSongModal from "./addsongmodal/addsongmodal";

const Card = () => {
  const [artists, setArtists] = useContext(ArtistContext);
  const [song, setSong] = useState("");
  const [rerender, setRerender] = useState(false);
  const renderArtists = () =>
    artists.map((artist) => (
      <>
        <div className="card mx-auto my-3 p-2 mainCard shadow ">
          <Image
            key={Math.random() * 100}
            alt={artist.name}
            artistimage={artist.artistimage}
          />
          <Header
            key={Math.random() * 100}
            name={artist.name}
            genre={artist.genre}
          />
          <Main key={Math.random() * 100} description={artist.description} />

          {artist.songs.map((song) => {
            return (
              <div className="mx-5 py-2">
                <SongCard
                  key={Math.random() * 100}
                  songName={song.name}
                  releasedate={song.releasedate}
                  songimage={song.albumimage}
                  name={artist.name}
                  yturl={song.songurl}
                />
              </div>
            );
          })}
          <section className="container mx-auto text-center w-50">

        <AddSongModal
                          key={Math.random() * 100}
                          name={artist.name}
                          yturl={song.songurl}
                          rerender={rerender}
                          setRerender={setRerender}
                          />
                          </section>
        </div>
        <div className="justify-content-center w-100">
          <Hr />
        </div>
      </>
    ));

  return <>{renderArtists()}</>;
};

export default Card;
