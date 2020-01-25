import React from "react";

export default function GiphyMaker({ gifItems }) {
  return (
    <ul>
      {gifItems.map(elm => {
        return (
          <li key={"images_giphy_" + elm.id}>
            <img src={elm.images.original.url} alt={elm.id} />
          </li>
        );
      })}
    </ul>
  );
}
