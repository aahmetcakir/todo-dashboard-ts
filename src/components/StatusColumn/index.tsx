import { Todo } from "../../interface/Todo";
import Card from "../Card"

function StatusColumn() {
    const todo: Todo = {
        id: 1,
        title: "Sign up flow",
        description: "Show email company name, full name, date of birth.",
        status: "inDev",
        completionPercentage: 67,
        completionText: "7 hours left",
        avatars: [
            {
                id: 1,
                fullname: "Ahmet ÇAKIR",
                photo: "https://avatars.githubusercontent.com/u/51996326?v=4",
            },
            {
                id: 2,
                fullname: "Ahmet ÇAKIR",
                photo: "https://pbs.twimg.com/profile_images/1669511414682116096/DIiHpxYM_400x400.jpg",
            }
        ]
    }
    return (
        <Card todo={todo} />
    )
}
export default StatusColumn