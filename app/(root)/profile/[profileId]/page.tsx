"use client";

import EmptyState from "@/components/EmptyState";
import LoaderSpinner from "@/components/LoaderSpinner";
import PodcastCard from "@/components/PodcastCard";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import Image from "next/image";
import React from "react";

const Profile = ({ params }: { params: { profileId: string } }) => {
  const user = useQuery(api.users.getUserById, {
    clerkId: params.profileId,
  });

  const podcastsData = useQuery(api.podcasts.getPodcastByAuthorId, {
    authorId: params.profileId,
  });

  if (!user || !podcastsData) return <LoaderSpinner />;

  return (
    <section className="mt-9 flex flex-col">
      <h1 className="text-20 font-bold text-white-1 max-md:text-center">
        PodcastR Profile
      </h1>
      <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row border-black-5">
        <div className="mt-6 flex flex-col gap-6 max-md:items-center md:flex-row">
          <Image
            src={user.imageUrl}
            width={250}
            height={250}
            alt="Podcaster"
            className="aspect-square rounded-lg"
          />
          <div className="flex flex-col justify-center max-md:items-center">
            <div className="flex flex-col gap-2.5">
              <figure className="flex gap-2 max-md:justify-center">
                <Image
                  src="/icons/verified.svg"
                  width={15}
                  height={15}
                  alt="verified"
                />
                <h2 className="text-14 font-medium text-white-2">
                  Verified Creator
                </h2>
              </figure>
              <h1 className="text-32 font-extrabold tracking-[-0.32px] text-white-1">
                {user.name}
              </h1>
            </div>
            <figure className="flex gap-3 py-6">
              <Image
                src="/icons/headphone.svg"
                width={24}
                height={24}
                alt="headphones"
              />
              <h2 className="text-16 font-semibold text-white-1">
                {podcastsData?.listeners} &nbsp;
                <span className="font-normal text-white-2">
                  monthly listeners
                </span>
              </h2>
            </figure>
          </div>
        </div>
      </div>

      <section className="mt-9 flex flex-col gap-5">
        <h1 className="text-20 font-bold text-white-1">All Podcasts</h1>
        {podcastsData && podcastsData.podcasts.length > 0 ? (
          <div className="podcast_grid">
            {podcastsData?.podcasts
              ?.slice(0, 4)
              .map((podcast) => (
                <PodcastCard
                  key={podcast._id}
                  imgUrl={podcast.imageUrl!}
                  title={podcast.podcastTitle!}
                  description={podcast.podcastDescription}
                  podcastId={podcast._id}
                />
              ))}
          </div>
        ) : (
          <EmptyState
            title="You have not created any podcasts yet"
            buttonLink="/create-podcast"
            buttonText="Create Podcast"
          />
        )}
      </section>
    </section>
  );
};

export default Profile;
