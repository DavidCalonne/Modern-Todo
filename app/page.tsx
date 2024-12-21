import ManageCategory from "@/components/ManageCategory";
import AddTodo from "@/components/AddTodo";

export default function Home() {
  return (
    <div>
      <header className="">
        <div>
          <h1>Modern Todo</h1>
          <p>A modern todo app built with NextJS and TypeScript</p>
        </div>
        <div>
          <AddTodo />
          <ManageCategory />
        </div>
      </header>
    </div>
  );
}
