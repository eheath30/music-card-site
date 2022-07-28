import React, { useState, useEffect } from "react";

const Modal = ({ songLyrics, setLyrics, songName, show, setShow, yturl }) => {
  function closeModal() {
    setLyrics("");
    setShow(false);
  }

// change youtube url to embeded url for embedding
let url = "";
if (yturl.includes("&")) {
  url = yturl.split('&')[0]
} else {
  url = yturl
}

let embededURL = url.replace("watch?v=", "embed/")

console.log(embededURL)




  return (
    <div id="myModal" className={`modal  ${show ? "showModal" : "hideModal"}`}>
      <div class="modal-content">
        <span onClick={closeModal} class="close">
          &times;
        </span>
        <span className="display-4 mx-auto">{songName}</span>
        <iframe className="mx-auto my-4 rounded" width="560" height="315" src={embededURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div>{songLyrics}</div>
      </div>
    </div>
    // <div
    //   // show={show}
    //   data-backdrop="static"
    //   // onHide={handleShow}
    //   backdrop="false"
    //   backdropClassName="modal-backdrop"
    //   class="modal fade"
    //   id="exampleModalCenter"
    //   tabindex="-1"
    //   role="dialog"
    //   aria-labelledby="exampleModalCenterTitle"
    //   aria-hidden="true"
    // >
    //   <div class="modal-dialog modal-dialog-centered" role="document">
    //     <div class="modal-content pb-3">
    //       <div class="modal-header mb-3">
    //         <h5 class="modal-title" id="exampleModalLongTitle">
    //           {songName}
    //         </h5>
    //         <button
    //           type="button"
    //           class="close btn btn-danger"
    //           data-dismiss="modal"
    //           aria-label="Close"
    //           onClick={onClose}
    //         >
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div class="modal-body mode">{songLyrics}</div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Modal;
