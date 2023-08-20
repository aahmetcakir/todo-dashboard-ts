import { Todo } from "../../interface/Todo";
import { Option } from "../icons";
import "./style.scss";

interface Props {
  todo: Todo;
}
function Card({ todo }: Props) {
  return (
    <div className="card">
      <div className="title">{todo.title}</div>
      <p className="description">{todo.description}</p>

      <div className="progress-bar">
        <div
          className="active"
          style={{ width: `${todo.completionPercentage * 3}px` }}
        ></div>
      </div>
      <div className="deadline">
        <b>{todo.completionText.split(" ")[0] + " "}</b>
        {todo.completionText.split(" ")[1]}{" "}
        {/* {`${todo.completionText.split(' ')[1]}`} */}
        left
      </div>
      <div className="card-footer">
        <div className="avatar-container">
          {todo.avatars.map((avatar) => {
            return (
              <img
                key={`avatars-${avatar.id}`}
                className="avatar"
                src={avatar.photo}
                alt={avatar.fullname}
              />
            );
          })}
        </div>
        <div className="option-menu">
          <Option />
        </div>
      </div>
    </div>
  );
}

export default Card;
