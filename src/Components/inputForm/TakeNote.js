import React from "react";
import "./takeInput.css";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined
} from "@material-ui/icons";

export default function TakeNote() {
  return (
    <div className="takeNote-parent">
      <form className="newNote-form">
        <div>
          <input className="note-Title" placeholder="Title"></input>
        </div>

        <span
          className="note-Details"
          role="textbox"
          contenteditable="true"
        ></span>
      </form>
      <div className="form-icons-container">
        <AddAlertOutlined className="form-icons" />
        <ArchiveOutlined className="form-icons" />
        <ImageOutlined className="form-icons" />
        <PaletteOutlined className="form-icons" />
        <MoreVertRounded className="form-icons" />
      </div>
    </div>
  );
}
