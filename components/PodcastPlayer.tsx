"use client";
import { cn } from "@/lib/utils";
import { useAudio } from "@/providers/AudioProvider";
import React, { useState } from "react";
import { Progress } from "./ui/progress";
import Image from "next/image";

const PodcastPlayer = () => {
  const { audio } = useAudio();

  const [currentTime, setCurrenTime] = useState(10);
  const [duration, setDuration] = useState(100);
  return (
    <div
      className={cn("sticky bottom-0 left-0  flex size-full flex-col", {
        hidden: !audio?.audioUrl,
      })}>
      <h1 className="text-white-1 text-xl">{audio?.title}</h1>
      <Progress
        value={(currentTime / duration) * 100}
        className="w-full "
        max={duration}
      />
      <Image
        src={audio?.imageUrl! || "/images/player1.png"}
        width={64}
        height={64}
        alt="player1"
        className="aspect-square rounded-xl"
      />
      <h1 className="text-white-1 text-xl">{audio?.author}</h1>
    </div>
  );
};

export default PodcastPlayer;
