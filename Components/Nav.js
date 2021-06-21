import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import React from "react";
import Image from "next/image";
import Header from "./Header";

const Nav = (props) => {
  return (
    <div className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly   max-w-2xl">
        <Header title="Home" Icon={HomeIcon} />
        <Header title="Treading" Icon={LightningBoltIcon} />
        <Header title="Badge" Icon={BadgeCheckIcon} />
        <Header title="Collection" Icon={CollectionIcon} />
        <Header title="Search" Icon={SearchIcon} />
        <Header title="User" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
      ></Image>
    </div>
  );
};

export default Nav;
