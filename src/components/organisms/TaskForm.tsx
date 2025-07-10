import { useState } from "react";
import { Input } from "../atoms/Input";
import { Button } from "../atoms/Button";

type Props = {
  addTodo: (text: string) => void;
};

export const TaskForm = ({ addTodo }: Props) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 py-4">
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you need to do?"
        aria-label="New task"
      />
      <Button type="submit">Add</Button>
    </form>
  );
};
