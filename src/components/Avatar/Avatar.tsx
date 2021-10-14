import React from "react";
import Link from "next/link";

import useAuth from "~data/hook/useAuth";

interface AvatarProps {
  className?: string;
}

const Avatar = (props: AvatarProps) => {
  const { user } = useAuth();

  return (
    <Link href="/profile">
      <a>
        <img
          src={String(user?.avatarUrl)}
          alt="user avatar"
          className={`
            h-8 w-8 rounded-full
            ${props.className ?? ""}
          `}
        />
      </a>
    </Link>
  );
};

export default Avatar;
