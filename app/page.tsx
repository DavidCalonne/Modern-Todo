"use client";

import { useEffect, useState } from "react";
import ManageCategory from "@/components/ManageCategory";
import AddTodo from "@/components/AddTodo";
import SwitchTheme from "@/components/SwitchTheme";
import TodoList from "@/components/TodoList";

interface Todo {
  id: string;
  name: string;
  category: string;
  advancement: string;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);

  // Fonction pour charger toutes les tâches
  const fetchTodos = async () => {
    try {
      const response = await fetch("/api/todo", { method: "GET" });
      const data: { success: boolean; todos: Todo[] } = await response.json();
      if (data.success) {
        setTodos(data.todos);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Charger les tâches au chargement du composant
  useEffect(() => {
    fetchTodos();
  }, []);

  // Fonction pour ajouter une tâche
  const addTodo = async (newTodo: Omit<Todo, "id">) => {
    try {
      const response = await fetch("/api/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo),
      });
      const result: { success: boolean; todo: Todo } = await response.json();
      if (result.success) {
        setTodos((prevTodos) => [...prevTodos, result.todo]); // Mise à jour en temps réel
      }
    } catch (error) {
      console.error("Error adding todo:", error);
    }
  };

  // Fonction pour supprimer une tâche
  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch(`/api/todo/${id}`, {
        method: "DELETE",
      });
      const result: { success: boolean } = await response.json();
      if (result.success) {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      }
    } catch (error) {
      console.error("Error deleting todo:", error);
    }
  };

  return (
    <div>
      <header className="responsive">
        <h1>Modern Todo</h1>
        <div>
          <ManageCategory />
          <SwitchTheme />
        </div>
      </header>
      <main>
        <section className="responsive">
          <h2>Add a new todo</h2>
          <AddTodo onAddTodo={addTodo}  />
        </section>
        <section className="responsive">
          <h2>Todo List</h2>
          <TodoList todos={todos} onDeleteTodo={deleteTodo} />
        </section>
      </main>
    </div>
  );
}
