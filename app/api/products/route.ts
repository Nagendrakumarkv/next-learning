import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
  ];

  return NextResponse.json(products);
}
