import React from "react";
import "./TodoCard.css";
import TodoFinal from "./TodoFinal/TodoFinal";
import TodoEdit from "./TodoEdit/TodoEdit";

const TodoCard = (props) => {
  return (
    <div className={`TodoCard`}>
      {!props.editing && (
        <TodoFinal
          isEditing={props.isEditing}
          todo={props.todo}
          id={props.id}
          delete={props.delete}
          date={props.date}
        />
      )}
      {props.editing && (
        <TodoEdit
          isEditing={props.isEditing}
          todo={props.todo}
          edit={props.edit}
          id={props.id}
        />
      )}
    </div>
  );
};

export default TodoCard;
