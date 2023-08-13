import { Todo } from "./Todo";

export interface IStatusColumn {
  id: number;
  title: string;
  todos: Array<Todo>;
}
