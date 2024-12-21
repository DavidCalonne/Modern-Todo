"use client";

import Input from "./ui/Input";
import { Pencil, Trash } from "lucide-react";

interface Todo {
  id: string;
  name: string;
  category: string;
  advancement: string;
}

interface TodoListProps {
  todos: Todo[];
}

function TodoItem({ todo }: { todo: Todo }) {
  return (
    <li key={todo.id} className={`todo-item ${todo.advancement}`}>
      <Input type="checkbox" placeholder="Checkbox" />
      <div>
        <span>{todo.name}</span>
        <p>{todo.category}</p>
      </div>
      <div className="button-group">
        <Pencil height={18} width={18} />
        <Trash height={18} width={18} />
      </div>
    </li>
  );
}

export default function TodoList({ todos }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
