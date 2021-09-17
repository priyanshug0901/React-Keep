import "./card.css";
import React, { useRef, useState } from "react";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined
} from "@material-ui/icons";
import ColorPalette from "./colorPalette/ColorPalette";

export default function Card(props) {
  const [Palette, setPalette] = useState(false);
  let backColor = useRef();
  function backColorHandler(e) {
    backColor.current.style.backgroundColor = e.target.style.backgroundColor;
  }
  return (
    <div ref={backColor} className="cards-main">
      <div onClick={props.onClick} className="card-title">
        Title
      </div>
      <div onClick={props.onClick} className="card-description">
        Hello, my name is priyanshu. Hello, my name is priyanshu. Hello, my name
        is priyanshu. Hello, my name is priyanshu.Hello, my name is
        priyanshu.Hello, my name is priyanshu.Hello, my name is priyanshu.Hello,
        my name is priyanshu.Hello, my name is priyanshu.how are you doing
      </div>

      <div className="card-icons-container">
        <AddAlertOutlined className="card-icons" />
        <ArchiveOutlined className="card-icons" />
        <ImageOutlined className="card-icons" />
        <div onClick={() => setPalette((state) => !state)}>
          <PaletteOutlined className="card-icons palette-icon" />
          {Palette && (
            <div className="palette-container">
              <ColorPalette changeBack={backColorHandler} />
            </div>
          )}
        </div>{" "}
        <MoreVertRounded className="card-icons" />
      </div>
    </div>
  );
}
