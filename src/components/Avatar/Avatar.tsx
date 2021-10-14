import React, { PropsWithChildren } from "react";
import Link from "next/link";

import useAuth from "~data/hook/useAuth";

/*
const getSprite = (): string => {
  const sprites = [
    "male",
    "female",
    "human",
    "identicon",
    "initials",
    "bottts",
    "avataaars",
    "jdenticon",
    "gridy",
    "micah",
  ];
  const max = sprites.length + 1;
  const index = Math.floor(Math.random() * max);
  return sprites[index];
};

const getRandomAvatar = (seed?: string | null): string => {
  const sprite = getSprite();
  seed = seed ?? String(Math.random() * 1000);

  // return `https://avatars.dicebear.com/api/${sprite}/${seed}.svg`;
};
*/

interface AvatarProps {
  className?: string;
}

const Avatar = (props: PropsWithChildren<AvatarProps>) => {
  const { user } = useAuth();
  const avatar =
    user?.avatarUrl ??
    `https://avatars.dicebear.com/api/avataaars/${user?.email || "avatar"}.svg`;

  return (
    <Link href="/profile">
      <img
        src={avatar}
        alt="user avatar"
        className={`
        h-8 w-8 rounded-full cursor-pointer
        ${props.className ?? ""}
      `}
      />
    </Link>
  );
};

export default Avatar;
