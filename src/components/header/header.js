import React, {useContext} from "react";
import { ArtistContext } from "../../ArtistContext";
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../../reducers/artistReducer';

export default function Header({name, genre, key, artist}) {
const data = artist

const saved = useSelector(state => state.artists.saved.some((card => card.id === data.id)))
const dispatch = useDispatch();

  function toggleFavorite(e) {
    e.preventDefault();
   if (!saved) {
    e.target.className = `fa-solid fa-star big-icon pt-1`
    dispatch(add(data));
   } else {
    e.target.className = `fa-regular fa-star big-icon-empty pt-1`
    dispatch(remove(data));
   }
}

  return (
    <header key={key} className="text-center">
      <div className="d-flex justify-content-center">
      <h1 className="mx-2">{name}</h1>
      <i className={saved ? `fa-solid fa-star big-icon pt-1` : `fa-regular fa-star big-icon-empty pt-1`} id="favourited"
      onClick={toggleFavorite}></i>
      </div>
      <h5>{genre}</h5>
    </header>
  );
}
