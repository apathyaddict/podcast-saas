import { sidebarLinks } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LeftSidebar = () => {
  return (
    <section className="sticky left-0 top-0 flex w-fit flex-col justify-between border-none bg-black-1 pt-8 text-white-1 max-md:hidden lg:w-[270px] lg:pl-8">
      <nav className="flex flex-col gap-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-1 pb-10 max-lg:justify-center">
          <Image src="/icons/logo.svg" alt="logo" width={23} height={27} />
          <h1 className="text-24 font-extrabold text-white max-lg:hidden">
            {" "}
            PodcastR
          </h1>
        </Link>

        {sidebarLinks.map(({ route, label, imgURL }) => {
          return (
            <Link href={route} key={label} className="gap-3 flex ">
              <Image src={imgURL} alt={label} width={24} height={24} />
              <p>{label}</p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSidebar;
