import React from "react";


export default function Header({ name, genre }) {
  return (
    <header className="text-center">
  <h1>{name}</h1>
  <h5>{genre}</h5>
  </header>
  )
}
