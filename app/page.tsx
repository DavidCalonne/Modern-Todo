"use client"

import ManageCategory from "@/components/ManageCategory";
import AddTodo from "@/components/AddTodo";
import SwitchTheme from "@/components/SwitchTheme";


export default function Home() {
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
          <AddTodo />
        </section>
        
      </main>
    </div>
  );
}
