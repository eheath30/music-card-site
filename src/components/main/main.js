import React from "react";

export default function Main({ description, key }) {
  return (
    <p key={key} className="text-center text-muted">
      {description}
    </p>
  );
}
