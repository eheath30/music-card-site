import React, { useContext } from "react";
import "../../App.css";
import musicImgHero from "./music.png";
import { ArtistContext } from "../../ArtistContext";

const IndexPage = () => {
  const [artist, setArtist] = useContext(ArtistContext);
  return (
    <div>
      <div className="position-relative overflow-hidden p-3 p-md-5 m-3 text-center bg-light">
        <div className="col-md-5 p-lg-5 mx-auto my-5">
          <h1 className="display-4 font-weight-normal">Reece's Pieces</h1>
          <p className="lead font-weight-normal">
            A global community where users can add share and listen to their
            favourite music, anywhere, anytime.
          </p>
          <a className="btn btn-lg btn-outline-secondary" href="/artists">
            Enter
          </a>
        </div>
        <img
          className="img-responsive w-25 mx-auto"
          src={musicImgHero}
          alt="music"
        />
        <div className="product-device box-shadow d-none d-md-block"></div>
        <div className="product-device product-device-2 box-shadow d-none d-md-block"></div>
      </div>

      <div className="container-fluid d-md-flex flex-md-equal w-100 my-md-3 my-3 px-md-3 mx-auto">
        <div className="bg-dark mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center text-white overflow-hidden">
          <div className="my-3 py-3">
            <h2 className="display-5">{artist[0].name}</h2>
            <p className="lead">{artist[0].description}</p>
          </div>
          <img
            className="img-responsive w-75 mx-auto pb-5"
            src={artist[0].artistimage}
            alt={artist[0].name}
          />
        </div>

        <div className="bg-light mr-md-3 pt-3 px-3 pt-md-5 px-md-5 text-center overflow-hidden">
          <div className="my-3 p-3 ">
            <h2 className="display-5">{artist[2].name}</h2>
            <p className="lead">{artist[2].description}</p>
          </div>
          <img
            className="img-responsive w-75 mx-auto pb-5"
            src={artist[2].artistimage}
            alt={artist[0].name}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
