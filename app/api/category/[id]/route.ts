import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "category.json");

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    let Categorys = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      Categorys = JSON.parse(fileContent);
    }
    const updatedCategorys = Categorys.filter((Category: any) => Category.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updatedCategorys, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
}
