import React from "react";

export default function Topbar(props) {
  return (
    <div className="head">
      <div className="container-head">
        <h2 className="title" >Redux Todo:</h2>

        <button onClick={() => props.setShowModal(true)} className="add">+</button>
      </div>
    </div>
  )
}