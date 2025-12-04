
"use server";

export async function addProduct(formData: FormData) {
  const name = formData.get("name");
  console.log("Product added:", name);
}
