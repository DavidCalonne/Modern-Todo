"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { Plus } from "lucide-react";
import Selector from "./ui/Selector";
import categories from "@/data/category.json";

interface AddTodoProps {
  onAddTodo: (todo: { name: string; category: string; advancement: string }) => Promise<void>;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [taskName, setTaskName] = useState<string>("");

  const handleAddTodo = async () => {
    if (!selectedCategory || !taskName) {
      alert("Please fill in both the task name and category.");
      return;
    }

    const newTodo = {
      name: taskName,
      category: selectedCategory,
      advancement: "progressing",
    };

    await onAddTodo(newTodo);
    setTaskName(""); // Réinitialise le champ texte
    setSelectedCategory(null); // Réinitialise le sélecteur
  };

  return (
    <div className="addTodo">
      <Input
        placeholder="What needs to be done?"
        value={taskName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTaskName(e.target.value)}
      />
      <Selector
        options={categories.map((category) => category.name)}
        onClick={(option: string) => setSelectedCategory(option)}
        className="custom-selector"
        optionClassName="custom-option"
      >
        {selectedCategory || "Select a Category"}
      </Selector>
      <Button type="secondary" onClick={handleAddTodo}>
        <Plus height={16} width={16} />
        Add Todo
      </Button>
    </div>
  );
}
