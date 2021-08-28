import React, { useState } from "react";
import Card from "../card/Card";
import TakeNote from "../inputForm/TakeNote";
import Modal from "../modal/Modal";
import "./content.css";

export default function Content() {
  const [cardShow, setCardShow] = useState(true);

  function cardClickHandler() {
    console.log("clicked");
    setCardShow(false);
  }
  function modalClickHandler() {
    console.log("clicked");

    setCardShow(false);
  }

  let arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
  let cards = (
    <div className="cards-container">
      {arr.map((ind) => {
        return cardShow ? (
          <Card onClick={cardClickHandler} />
        ) : (
          <Modal onClick={modalClickHandler} />
        );
      })}
    </div>
  );

  return (
    <div className="home-page">
      <div className="input-form">
        <TakeNote />
      </div>
      <div className="cards-container">
        {arr.map((ind) => {
          return cardShow ? (
            <Modal onClick={() => setCardShow(true)} />
          ) : (
            <Card onClick={() => setCardShow(false)} />
          );
        })}
      </div>
    </div>
  );
}
