import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Todo {
  id: string;
  name: string;
  category: string;
  advancement: string;
}

const filePath = path.join(process.cwd(), "data", "todo.json");

async function GET() {
  try {
    const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "[]";
    const todos: Todo[] = JSON.parse(fileContent);
    return NextResponse.json({ success: true, todos });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

async function POST(req: Request) {
  try {
    const body: Omit<Todo, "id"> = await req.json();
    let todos: Todo[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      todos = JSON.parse(fileContent);
    }

    const newTodo: Todo = {
      id: Math.random().toString(36).substr(2, 9), // ID
      ...body,
    };
    todos.push(newTodo);

    fs.writeFileSync(filePath, JSON.stringify(todos, null, 2), "utf-8");

    return NextResponse.json({ success: true, todo: newTodo });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
export { GET, POST };