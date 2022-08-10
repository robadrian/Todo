import "./TodoFinal.css";
import {
  IoIosTrash,
  IoMdCheckmark,
  IoMdCreate,
  IoIosArrowForward,
} from "react-icons/io";
import useToggle from "../../../hooks/useToggle";

const TodoFinal = (props) => {
  const [completed, setToCompleted] = useToggle();

  const isEditingHandler = () => {
    props.isEditing(props.id, props.todo);
  };

  const onClickHandler = () => {
    props.delete(props.id);
  };

  return (
    <>
      <span className="card">
        <p className={!completed ? "Todo" : `TodoDone`}>{props.todo}</p>
        <p className="date">{props.date}</p>
      </span>
      <div className="icons">
        {!completed && (
          <IoMdCheckmark className="icon check" onClick={setToCompleted} />
        )}
        {!completed && (
          <IoMdCreate className="icon pencil" onClick={isEditingHandler} />
        )}
        {completed && (
          <IoIosTrash className="icon delete" onClick={onClickHandler} />
        )}
        {completed && (
          <IoIosArrowForward className="icon arrow" onClick={setToCompleted} />
        )}
      </div>
    </>
  );
};

export default TodoFinal;
