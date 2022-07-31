import React, {useContext} from "react";
import { ArtistContext } from "../../ArtistContext";

export default function Header({ name, genre }) {
const [artist, setArtist] = useContext(ArtistContext)


  function toggleFavorite(e) {
    console.log(e.target.className)
   if (e.target.className == `fa-regular fa-star big-icon-empty pt-1`) {
    e.target.className = `fa-solid fa-star big-icon pt-1`
   } else {
    e.target.className = `fa-regular fa-star big-icon-empty pt-1`
   }
}

  return (
    <header className="text-center">
      <div className="d-flex justify-content-center">
      <h1 className="mx-2">{name}</h1>
      <i class="fa-regular fa-star big-icon-empty pt-1" id="favourited"
      onClick={toggleFavorite}></i>
      </div>
      <h5>{genre}</h5>
    </header>
  );
}
