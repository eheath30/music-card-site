import React from "react";

export default function Image({ artistimage, name, key }) {
  return (
    <img
      key={key}
      src={artistimage}
      alt={name}
      className="card-img-top mx-auto mb-3 rounded shadow"
    />
  );
}
