import React from "react";
import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function List(props) {
  const items = useSelector(state => state)
  
  return (
    <ul className="task-list">
      {items.map((item, index) => <Card task={item} key={index} text={item.text} ></Card>)}
    </ul>
  )
}