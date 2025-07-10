import type { Todo } from "../../types/types";
import { TaskItem } from "../molecules/TaskItem";

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  removeTodo: (id: string) => void;
};

export const TaskList = ({ todos, toggleTodo, removeTodo }: Props) => {
  if (todos.length === 0)
    return <p className="text-gray-500 py-4">No tasks yet 🙌</p>;

  return (
    <ul role="list" className="space-y-2">
      {todos.map((todo) => (
        <TaskItem
          key={todo.id}
          todo={todo}
          onToggle={toggleTodo}
          onDelete={removeTodo}
        />
      ))}
    </ul>
  );
};
