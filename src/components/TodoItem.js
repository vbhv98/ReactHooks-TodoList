import React, { useContext } from "react";
import TodoContext from "../context";

export default function({ id, text, completed }) {
  const dispach = useContext(TodoContext);
  return (
    <li>
      <input
        type="checkbox"
        checked={completed}
        onChange={() =>
          dispach({ type: "UPDATE", payload: { id, completed: !completed } })
        }
      />
      {text}
      <button
        onClick={() =>
          dispach({
            type: "DELETE",
            payload: {
              id
            }
          })
        }
      >
        Delete
      </button>
    </li>
  );
}
