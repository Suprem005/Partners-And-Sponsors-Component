"use client";

import Image from "next/image";

interface SliderCardProps {
  title: string;
  imageUrl: string;
}

export default function SliderCard({ title, imageUrl }: SliderCardProps) {
  return (
    <div>
      <Image
        src={imageUrl}
        alt={title}
        width={300}
        height={250}
        className="rounded-lg shadow-sm object-cover w-full h-70"
      />
    </div>
  );
}
