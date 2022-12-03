import React from "react";
import { ListGroup } from "react-bootstrap";

const TodoList = (props) => {
  const { isCompleted, changed, children, remove } = props;

  return (
    <ListGroup.Item>
      <label htmlFor="" className="form-check-label">
        <input
          className="checkbox"
          type="checkbox"
          checked={isCompleted}
          onChange={changed}
        />{" "}
        <span style={{ textDecoration: isCompleted ? "line-through" : "none" }}>
          {" "}
          {children}{" "}
        </span>
      </label>

      <i className="remove mdi mdi-close-circle-outline" onClick={remove}></i>
    </ListGroup.Item>
  );
};

export default TodoList;
