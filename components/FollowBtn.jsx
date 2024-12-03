"use client";

import { useState } from "react";
import { RiUserFollowFill, RiUserUnfollowFill } from "react-icons/ri";

export default function FollowBtn({ dictionary }) {
  const [isFollow, setIsfollow] = useState(true);
  return (
    <>
      <button
        onClick={() => {
          setIsfollow(!isFollow);
        }}
        className=" flex items-center gap-1.5 bg-red-500 py-3 px-5 rounded-full text-white text-xl"
      >
        {isFollow ? <RiUserFollowFill /> : <RiUserUnfollowFill />}

        <h2 className="text-base ">
          {isFollow ? dictionary.follow : dictionary.unfollow}
        </h2>
      </button>
    </>
  );
}
