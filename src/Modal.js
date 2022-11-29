import React from "react";
import "./Modal.css";
import ReactDom from "react-dom";


export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    ReactDom.createPortal(
      <>
        <div className= "overlay" />
        <div className= "modal">
          <button onClick={onClose}>Close Modal</button>
          {children}
        </div>
      </>
    ),
    document.getElementById("portal")
  );
}
