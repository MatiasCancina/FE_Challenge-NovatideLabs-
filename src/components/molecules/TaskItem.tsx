"use client";

import type { Todo } from "../../types/types";
import { Button } from "../atoms/Button";
import { FiCheck, FiX, FiRotateCcw } from "react-icons/fi";
import { clsx } from "clsx";

type Props = {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
};

export const TaskItem = ({ todo, onToggle, onDelete }: Props) => {
  return (
    <li
      className={clsx(
        "group flex items-center gap-4 p-4 bg-white rounded-2xl border-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]",
        todo.completed
          ? "border-emerald-200 bg-emerald-50"
          : "border-gray-200 hover:border-indigo-200"
      )}
    >
      <div
        className={clsx(
          "flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-200",
          todo.completed
            ? "bg-emerald-500 border-emerald-500"
            : "border-gray-300 hover:border-indigo-500 group-hover:scale-110"
        )}
        onClick={() => onToggle(todo.id)}
      >
        {todo.completed && <FiCheck className="w-3 h-3 text-white" />}
      </div>

      <span
        className={clsx(
          "flex-1 transition-all duration-300",
          todo.completed ? "line-through text-gray-500" : "text-gray-800"
        )}
      >
        {todo.text}
      </span>

      <div className="flex gap-2 transition-opacity duration-200">
        <Button
          variant="minimal"
          size="sm"
          onClick={() => onToggle(todo.id)}
          aria-label="Toggle task status"
        >
          {todo.completed ? (
            <FiRotateCcw className="w-4 h-4" />
          ) : (
            <FiCheck className="w-4 h-4" />
          )}
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(todo.id)}
          aria-label="Delete task"
        >
          <FiX className="w-4 h-4" />
        </Button>
      </div>
    </li>
  );
};
