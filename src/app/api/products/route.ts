import { products } from "./data";

export async function GET() {
  return new Response(JSON.stringify(products), {
    status: 200,
  });
}

export async function POST(request: Request) {
  const data = await request.json();
  const newProduct = {
    id: products.length + 1,
    ...data,
  };
  products.push(newProduct);

  console.log(products);

  return new Response(JSON.stringify(newProduct), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
export async function DELETE(request: Request) {
  const data = await request.json();
  const productIndex = products.findIndex((product) => product.id === data.id);
  products.splice(productIndex, 1);
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
export async function PATCH(request: Request) {
  const data = await request.json();
  const productIndex = products.findIndex((product) => product.id === data.id);
  products[productIndex] = { ...products[productIndex], ...data };
  return new Response(JSON.stringify(products), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
