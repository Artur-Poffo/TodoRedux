import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {deleteItem, onDone} from "../../actions/todo"

export default function Card(props) {
  const dispatch = useDispatch()

  return (
    <div className="card">
      <h3 className={props.task.done ? "TaskDone task-name" : "task-name"} >{props.text}</h3>

      <div className="btns">
        <button onClick={() => dispatch(onDone(props.task.id))} className="done">Done</button>
        <button onClick={() => dispatch(deleteItem(props.task.id))} className="delete">Delete</button>
      </div>
    </div>
  )
}