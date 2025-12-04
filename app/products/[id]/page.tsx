export default async function ProductDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  return <h1 style={{ padding: 20 }}>Product ID: {id}</h1>;
}
