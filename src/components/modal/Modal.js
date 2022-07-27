import React, { useState, useEffect} from 'react'
const axios = require('axios').default;

export default function Modal({songname, artistname}) {

    const [ lyrics, setLyrics ] = useState('')
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    // const songNameUrl = song.replace(/ /g,"%20");
    // const artistNameUrl = name.replace(/ /g,"%20");

    async function getLyrics() {
        try {
        //   const url = `https://api.lyrics.ovh/v1/${artistNameUrl}/${songNameUrl}`;
          const url = `https://api.punkapi.com/v2/beers`
          const response = await axios.get(url);
          console.log(response.data[0].name)
          let data = response
          setLyrics(data);
        } catch (error) {
          console.error(error);
          setLyrics("loading error");
        }
      }

  return (
    <div show={show}
    onHide={handleClose}
   backdrop="false"
   backdropClassName="modal-backdrop"
   class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content pb-3">
            <div class="modal-header mb-3">
                <h5 class="modal-title" id="exampleModalLongTitle">{songname}</h5>
                <button type="button" class="close btn btn-danger" data-dismiss="modal" aria-label="Close" onClick={handleClose}>
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body mode">
                {lyrics}
            </div>
            </div>
        </div>
    </div>
  )
}
