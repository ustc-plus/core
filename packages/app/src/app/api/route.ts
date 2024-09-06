export async function GET() {
  let data = JSON.stringify({ data: 'Hello World!' }) as BodyInit

  return new Response(data)
}
