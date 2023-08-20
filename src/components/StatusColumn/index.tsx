import { useState } from "react";
import { IStatusColumn } from "../../interface/StatusColumn";
import Card from "../Card";
import { Plus, Option } from "../icons";
import "./style.scss";
interface Props {
  column: IStatusColumn;
}
function StatusColumn({ column }: Props) {
  const [colTitleToggle, setColTitleToggle] = useState<boolean>(false);

  const changeColumnTitle = (column: IStatusColumn, value: string) => {
    column.title = value;
  };

  const handleKeyDown = (event: any) => {
    if (event.key == "Enter") {
      setColTitleToggle(false);
    }
  };

  return (
    <div className="column">
      <div
        className="header"
        onClick={() => {
          setColTitleToggle(true);
        }}
      >
        {colTitleToggle ? (
          <input
            type="text"
            placeholder={column.title}
            className="title-input"
            onChange={(e) => changeColumnTitle(column, e.target.value)}
            onKeyDown={handleKeyDown}
          />
        ) : (
          <div className="title">{column.title}</div>
        )}
        <div className="actions">
          <Option />
          <Plus />
        </div>
      </div>
      <div className="todos" onClick={() => setColTitleToggle(false)}>
        {column.todos.map((todo) => {
          return <Card key={`todo-${todo.id}`} todo={todo} />;
        })}
      </div>
    </div>
  );
}
export default StatusColumn;
