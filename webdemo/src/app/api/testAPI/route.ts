async function fetchApiData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();

    return data;
}

export async function GET() {
    const items = await fetchApiData();

    return Response.json(items);
}
