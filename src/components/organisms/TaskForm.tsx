"use client";

import type React from "react";

import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";
import { FiPlus, FiEdit3 } from "react-icons/fi";
import clsx from "clsx";

type Props = {
  addTodo: (text: string) => void;
};

export const TaskForm = ({ addTodo }: Props) => {
  const [text, setText] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <div
        className={clsx(
          "flex gap-3 p-2 bg-white rounded-2xl border-2 transition-all duration-300 shadow-sm",
          isFocused
            ? "border-indigo-500 shadow-lg ring-4 ring-indigo-100"
            : "border-gray-200 hover:border-gray-300"
        )}
      >
        <div className="flex items-center pl-2">
          <FiEdit3
            className={clsx(
              "w-5 h-5 transition-colors duration-200",
              isFocused ? "text-indigo-500" : "text-gray-400"
            )}
          />
        </div>

        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="What needs to be done?"
          aria-label="New task"
          variant="minimal"
          className="border-0 bg-transparent focus:ring-0 px-0"
        />

        <Button
          type="submit"
          variant="primary"
          size="sm"
          disabled={!text.trim()}
          className="flex-shrink-0 gap-2 px-4"
        >
          <FiPlus className="w-4 h-4" />
          Add
        </Button>
      </div>
    </form>
  );
};
