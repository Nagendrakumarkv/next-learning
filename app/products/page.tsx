// 

import { addProduct } from "../actions";

export default function ProductsPage() {
  return (
    <form action={addProduct}>
      <input name="name" placeholder="Product name" />
      <button type="submit">Add</button>
    </form>
  );
}
