import React, { useState, useEffect } from "react";

const Modal = ({ songLyrics, setLyrics, songName, show, setShow }) => {
  function onClose() {
    setLyrics("");
    setShow("");
  }

  return (
    <div
      // show={show}
      data-backdrop="static"
      // onHide={handleShow}
      backdrop="false"
      backdropClassName="modal-backdrop"
      class="modal fade"
      id="exampleModalCenter"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content pb-3">
          <div class="modal-header mb-3">
            <h5 class="modal-title" id="exampleModalLongTitle">
              {songName}
            </h5>
            <button
              type="button"
              class="close btn btn-danger"
              data-dismiss="modal"
              aria-label="Close"
              onClick={onClose}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body mode">{songLyrics}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
