import React from "react";
import "./modal.css";

export const Modal = ({ modalIsOpen, closeModal, highScore }) => {
  return (
    <dialog open={modalIsOpen}>
      <article>
        <h2>GAME OVER</h2>
        <h3>Your high score is {highScore}</h3>
        <button onClick={closeModal}>x</button>
      </article>
    </dialog>
  );
};
