const { getPhotoById } = require("@/lib/image-data");
const { NextResponse } = require("next/server");

export async function GET(_request, { params }) {
  const photoId = params?.id;

  const data = await getPhotoById(photoId);

  return NextResponse.json(data);
}
