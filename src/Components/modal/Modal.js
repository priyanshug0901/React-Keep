import "./modal.css";
import React, { useRef, useEffect, useCallback } from "react";
import {
  AddAlertOutlined,
  ArchiveOutlined,
  ImageOutlined,
  MoreVertRounded,
  PaletteOutlined
} from "@material-ui/icons";

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#202124",
  opacity: 0.1
};

export default function Modal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <>
          <div ref={modalRef} onClick={closeModal} style={OVERLAY_STYLES}></div>
          <div onClick={closeModal} className="card-main">
            <div className="card-title">Title</div>
            <div className="card-description">note note note</div>

            <div className="card-icons-container">
              <AddAlertOutlined className="card-icons" />
              <ArchiveOutlined className="card-icons" />
              <ImageOutlined className="card-icons" />
              <PaletteOutlined className="card-icons" />
              <MoreVertRounded className="card-icons" />
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
