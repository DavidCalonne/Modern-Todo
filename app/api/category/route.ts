import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

interface Category {
  id: string;
  name: string;
  category: string;
  advancement: string;
}

const filePath = path.join(process.cwd(), "data", "category.json");

async function GET() {
  try {
    const fileContent = fs.existsSync(filePath) ? fs.readFileSync(filePath, "utf-8") : "[]";
    const Categorys: Category[] = JSON.parse(fileContent);
    return NextResponse.json({ success: true, Categorys });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}

async function POST(req: Request) {
  try {
    const body: Omit<Category, "id"> = await req.json();
    let Categorys: Category[] = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      Categorys = JSON.parse(fileContent);
    }

    const newCategory: Category = {
      id: Math.random().toString(36).substr(2, 9), // ID
      ...body,
    };
    Categorys.push(newCategory);

    fs.writeFileSync(filePath, JSON.stringify(Categorys, null, 2), "utf-8");

    return NextResponse.json({ success: true, Category: newCategory });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
export { GET, POST };