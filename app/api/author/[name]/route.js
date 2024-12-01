const { getByAuthor } = require("@/lib/image-data");
const { NextResponse } = require("next/server");

export async function GET(request, { params }) {
  const authorName = params?.name; // Dynamic parameter from the URL

  const data = getByAuthor(decodeURIComponent(authorName)); // Decode URI component

  return NextResponse.json(data);
}
