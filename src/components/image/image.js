import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image({ artistimage, name }) {
    return (
     <img src={artistimage} alt={name} class="card-img-top mx-auto mb-3 rounded shadow"/>
     )
}
