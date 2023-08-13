import { IStatusColumn } from "../../interface/StatusColumn";
import Card from "../Card"
import { Plus, Option } from "../icons";
import "./index.scss"
interface Props {
    column: IStatusColumn
}
function StatusColumn({ column }: Props) {

    return (
        <div className="column">
            <div className="header">
                <div className="title">
                    {column.title}
                </div>
                <div className="actions">
                    <Option />
                    <Plus />
                </div>
            </div>
            <div className="todos">
                {
                    column.todos.map(todo => {
                        return <Card key={`todo-${todo.id}`} todo={todo} />
                    })
                }
            </div>
        </div>
    )
}
export default StatusColumn