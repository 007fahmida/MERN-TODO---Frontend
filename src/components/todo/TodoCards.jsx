import React from "react";
import { MdDelete } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";

const TodoCards = ({title,body}) => {
  return (
    <div className="p-3 todo-card">
      <div>
        <h5>{title}</h5>
        <p className="todo-cards-p">
            {body.split("", 77)}...
        </p>
      </div>
      <div>
        <div><GrUpdate /></div>
        <div><MdDelete /></div>
      
      </div>
    </div>
  );
};

export default TodoCards;
