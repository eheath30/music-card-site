import React, { useContext, useState } from "react";
import { ArtistContext } from "../../ArtistContext";
import Image from "../../components/image/image";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import SongCard from "../../components/SongCard";
import AddSongModal from "../../components/addsongmodal/addsongmodal";
import Hr from "../../components/hr/hr";

export default function SearchArtist() {
  const [artist, setArtist] = useContext(ArtistContext);
  const [searchTerm, setSearchTerm] = useState();
  const [rerender, setRerender] = useState(false);

  // todo: should return artist card based on submitted search term
  let searchResult;
  function submitArtistSearch(e) {
    e.preventDefault();
  }

  function handleSearchTerm(e) {
    setSearchTerm(e.target.value);
  }

  const renderArtists = () =>
    artist.map((artist) => (
        <>
        {artist.name === searchTerm && (
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
              <Main
                key={Math.random() * 100}
                description={artist.description}
              />

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
                          yturl={artist.song}
                          rerender={rerender}
                          setRerender={setRerender}
                          />
                          </section>
            </div>
            <div className="justify-content-center w-100">
              <Hr />
            </div>
          </>
        )}
        </>
    ));

  return (
    <>
      <section className="container mx-auto text-center py-5">
        <h1 className="display-4">Search for an Existing Artist.</h1>
        <div className="container mx-auto w-50 py-5">
          <div className="container-fluid">
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={handleSearchTerm}
              />
              <button
                className="btn btn-lg btn-outline-success"
                onClick={submitArtistSearch}
              >
                Search
              </button>
            </form>
            <div className="container">{searchResult}</div>
          </div>
        </div>
      </section>
      {renderArtists()}
    </>
  );
}
