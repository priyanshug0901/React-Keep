import React from "react";
import { PaletteOutlined } from "@material-ui/icons";
import "./colorPalette.css";

export default function ColorPalette({ changeBack }) {
  const colors = [
    { color: "#ffffff", arw: false },
    { color: "#f28b82", arw: false },
    { color: "#fbbc04", arw: false },
    { color: "#fff475", arw: false },
    { color: "#ccff90", arw: false },
    { color: "#a7ffeb", arw: false },
    { color: "#cbf0f8", arw: false },
    { color: "#aecbfa", arw: false },
    { color: "#d7aefb", arw: false },
    { color: "#fdcfe8", arw: false },
    { color: "#e6c9a8", arw: false },
    { color: "#e8eaed", arw: false }
  ];

  return (
    <>
      {colors.map((color) => {
        return (
          <button
            className="btn"
            style={{ backgroundColor: color.color }}
            onClick={changeBack}
          ></button>
        );
      })}
    </>
  );
}
