import type { Todo } from "../../types/types";
import { Button } from "../atoms/Button";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <li className="flex items-center justify-between gap-2 py-2">
      <span className={todo.completed ? "line-through text-gray-400" : ""}>
        {todo.text}
      </span>
      <div className="flex gap-2">
        <Button
          variant="success"
          onClick={() => onToggle(todo.id)}
          aria-label="Toggle task status"
        >
          {todo.completed ? "Undo" : "Done"}
        </Button>
        <Button
          variant="danger"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete task"
        >
          🗑
        </Button>
      </div>
    </li>
  );
};
