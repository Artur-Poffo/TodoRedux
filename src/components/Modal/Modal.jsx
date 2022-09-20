import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/todo";

export default function Modal(props) {
  const [text, setText] = useState("")
  const dispatch = useDispatch()

  function AddEvent(e) {
    e.preventDefault() 
    if(text) {
      dispatch(addItem(text))
      setText("")
      props.setShow(false)
    }
  }

  function handleChange(e) {
    let t = e.target.value
    setText(t)
  }

  return (props.showModal ?
    <div className="background">
      <div className="modal">
        <h2>Add Task</h2>
        <input onChange={handleChange} value={text} placeholder="Task Name" type="text" name="task-name" id="task-name" />
        <button onClick={AddEvent} className="done" >Add</button>
      </div>
    </div> : <></>
  )
}