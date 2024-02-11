async function fetchNavItems() {
    return [
        {
            "id": 1,
            "href": "/",
            "name": "Home"
        },
        {
            "id": 2,
            "href": "/coins",
            "name": "Coins"
        },
        {
            "id": 3,
            "href": "/news",
            "name": "News"
        },
        {
            "id": 4,
            "href": "/contact",
            "name": "Contact"
        }
    ];
}

export async function GET() {
    const items = await fetchNavItems();

    return Response.json(items);
}
