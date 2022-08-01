import React, {useState} from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Image from "../../components/image/image";
import SongCard from "../../components/SongCard";
import Hr from "../../components/hr/hr";
import AddSongModal from "../../components/addsongmodal/addsongmodal";
const Saved = () => {
    const [song, ] = useState("");

    const artistList = useSelector(state => state.artists.saved);

    return <section className="container text-center">
            <h1 className="display-3">Saved Artists!</h1>
            <div className="container">
                { artistList.length === 0 ? <em>No artists saved...</em> : artistList.map(artist =>
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
            artist={artist}
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
                          />
                          </section>
        </div>
        <div className="justify-content-center w-100">
          <Hr />
        </div>
      </>)}
            </div>
           </section>
}

export default Saved;
