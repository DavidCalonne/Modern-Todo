"use client";

import Button from "./ui/Button";
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
  onDeleteTodo: (id: string) => void;
}

function TodoItem({ todo, onDelete }: { todo: Todo; onDelete: (id: string) => void }) {
  return (
    <li key={todo.id} className={`todo-item ${todo.advancement}`}>
      <Input type="checkbox" placeholder="Checkbox" />
      <div>
        <span>{todo.name}</span>
        <p>{todo.category}</p>
      </div>
      <div className="button-group">
        <Button type="secondary">
          <Pencil height={18} width={18} />
        </Button>
        <Button type="primary" onClick={() => onDelete(todo.id)}>
          <Trash height={18} width={18} />
        </Button>
      </div>
    </li>
  );
}

export default function TodoList({ todos, onDeleteTodo }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDeleteTodo} />
      ))}
    </ul>
  );
}
