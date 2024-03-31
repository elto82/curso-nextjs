export async function GET() {
  return new Response(
    JSON.stringify({
      message: "Hello world!, This is my API",
    }),
    {
      status: 200,
    }
  );
}
