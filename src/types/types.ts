export type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export type Filter = "all" | "done" | "pending";
