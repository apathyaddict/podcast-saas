"use client";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const RightSidebar = () => {
  const { user } = useUser();

  const topPodcaster = useQuery(api.users.getTopUserByPodcastCount);

  return (
    <section className="sticky right-0 top-0 flex w-[310px] flex-col overflow-y-hidden border-none bg-black-1 px-[30px] pt-8 max-xl:hidden">
      <SignedIn>
        <Link href={`/profile/${user?.id}`} className="flex w-full gap-3 pb-12">
          <UserButton />
          <div className="flex w-full items-center justify-between">
            <h1 className="text-16 truncate font-semibold text-white-1">
              {user?.firstName} {user?.lastName}
            </h1>
            <Image
              src="/icons/right-arrow.svg"
              alt="arrow"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </SignedIn>

      <section className="">
        <Header headerTitle="Fans like you" />
        {/* <Carousel fansLikeDetail={topPodcaster!} /> */}
      </section>
    </section>
  );
};

export default RightSidebar;
