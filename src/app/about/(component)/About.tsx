import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 p-6 sm:p-10">
        <div className="text-center flex flex-col gap-4">
          <div>
            <h2 className="text-4xl text-white font-bold ">About GGEvents</h2>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Discover the story behind our principles that guide us, and how we
              are dedicated to empowering your business to grow and thrive.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full justify-center items-center">
          <Image
            src={"/images/organization/mountain.jpg"}
            alt="teamwork"
            width={800}
            height={400}
            className="object-cover  max-h-[300px] rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}
