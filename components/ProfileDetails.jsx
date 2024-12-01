import { getDictionary } from "@/app/[lang]/dictionaries";
import Image from "next/image";
import { RiUserFollowFill } from "react-icons/ri";
import PhotoList from "./PhotoList";
export default async function ProfileDetails({ name, lang }) {
  const response = await fetch(`${process.env.BASE_API_URL}/author/${name}`);

  const photos = await response.json();

  const totalLike = photos.reduce((total, item) => total + item.likes, 0);

  const profile = photos[0].author;

  const dictionary = await getDictionary(lang);

  return (
    <>
      <div>
        <div className="mb-10 p-10 border-b-2">
          <div className="flex flex-col items-center gap-6 justify-center">
            <Image
              src={profile.avatar}
              alt="avatar"
              width={200}
              height={200}
              className="rounded-full "
            />
            <h6 className="text-3xl font-bold">{profile.name}</h6>
            <h1 className="text-base lg:text-lg text-center text-black/60">
              {profile.bio}
            </h1>

            <div className="flex gap-10">
              <p className="text-black/60 text-sm lg:text-base flex flex-col items-center">
                <span className="text-xl font-bold">{totalLike}</span>

                <span>{dictionary.totalViews}</span>
              </p>
              <p className="text-black/60 text-sm lg:text-base flex flex-col items-center">
                <span className="text-xl font-bold">{photos.length}</span>

                <span>{dictionary.photo}</span>
              </p>
              <p className="text-black/60 text-sm lg:text-base flex flex-col items-center">
                <span className="text-xl font-bold">{profile.followers}</span>

                <span>{dictionary.followers}</span>
              </p>
            </div>

            <button className=" flex items-center gap-1.5 bg-red-500 py-3 px-5 rounded-full text-white text-xl">
              <RiUserFollowFill />
              <h2 className="text-base "> {dictionary.follow}</h2>
            </button>
          </div>
        </div>
      </div>

      <PhotoList photos={photos} />
    </>
  );
}
