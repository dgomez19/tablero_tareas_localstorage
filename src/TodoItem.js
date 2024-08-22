import './TodoItem.css';

import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";

function TodoItem(props) {
  return (
    <li className="TodoItem">
      <AiOutlineCheckCircle
        className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
        onClick={props.onCompleted}
      >
        V
      </AiOutlineCheckCircle>

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>

      <AiOutlineClose
        className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </AiOutlineClose>
    </li>
  );
}

export { TodoItem };