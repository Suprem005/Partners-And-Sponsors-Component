import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

type OurVisionData = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

interface OurVisionProps {
  ourVisionData: OurVisionData[];
}

export default function OurVisions({ ourVisionData }: OurVisionProps) {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 p-10">
        {ourVisionData.map((items) => (
          <div
            key={items.id}
            className="flex bg-neutral-900 p-4 rounded-2xl
                       flex-col sm:gap-10 sm:flex-row sm:odd:flex-row-reverse"
          >
            {/* image */}
            <div className="sm:w-1/2">
              <Image
                src={items.imageUrl}
                width={450}
                height={450}
                alt={items.title}
                className="rounded-xl object-cover w-full h-[390px]"
              />
            </div>

            {/* content */}
            <div className="sm:w-1/2 pt-4 flex items-center">
              <div className="flex flex-col gap-10">
                <h2 className="text-4xl text-white font-bold">{items.title}</h2>

                <p className="text-md text-gray-400 line-clamp-5">
                  {items.description}
                </p>

                <Button
                  variant="outline"
                  className="bg-neutral-700 text-white rounded-3xl px-6 w-fit"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
