import React from "react";

export default function Image({ artistimage, name }) {
  return (
    <img
      src={artistimage}
      alt={name}
      className="card-img-top mx-auto mb-3 rounded shadow"
    />
  );
}
