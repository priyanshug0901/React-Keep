import React, { useState } from "react";
import Card from "../card/Card";
import TakeNote from "../inputForm/TakeNote";
import Modal from "../modal/Modal";
import "./content.css";

export default function Content() {
  const [showModal, setModalShow] = useState(false);

  function openModal() {
    console.log("clicked");
    setModalShow((prev) => !prev);
  }

  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="home-page">
      <div className="input-form">
        <TakeNote />
      </div>

      <div className="cards-container">
        {arr.map((ind) => (
          <>
            <Card onClick={openModal} />
            <Modal showModal={showModal} setShowModal={setModalShow} />
          </>
        ))}
      </div>
    </div>
  );
}
