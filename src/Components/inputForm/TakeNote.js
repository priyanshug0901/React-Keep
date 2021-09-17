import React, { useRef, useReducer } from "react";
import "./takeInput.css";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined
} from "@material-ui/icons";
import reducer, { ACTIONS, initialState } from "../../reducer";
import { useStateValue } from "../../Provider";

export default function TakeNote() {
  const title = useRef();
  const noteDes = useRef();
  const [initialState, dispatch] = useStateValue();

  function addToNotes() {}

  const createNote = () => {
    dispatch({
      type: ACTIONS.ADD_NOTES,
      title: title.current.innerText,
      lists: noteDes.current.innerText
    });
  };
  return (
    <div className="takeNote-parent">
      <form className="newNote-form">
        <div>
          <input ref={title} className="note-Title" placeholder="Title"></input>
        </div>

        <span
          ref={noteDes}
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
        <button className="form-submit-btn" onClick={createNote}>
          submit
        </button>
      </div>
    </div>
  );
}
