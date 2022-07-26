import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header({ name, genre }) {
  return (
    <header className="text-center">
  <h1>{name}</h1>
  <h5>{genre}</h5>
  </header>
  )
}
