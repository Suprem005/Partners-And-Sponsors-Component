import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Address } from "@/components/icons/Address";
import { Gmail } from "@/components/icons/Gmail";
import { Headset } from "lucide-react";
import Image from "next/image";
import React from "react";

type ExpertData = {
  id: number;
  name: string;
  position: string;
};

interface MeetOurExpertProps {
  title: string;
  shortDescription: string;
  expertData: ExpertData[];
}

export default function MeetOurExperts({
  title,
  shortDescription,
  expertData,
}: MeetOurExpertProps) {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 p-6 sm:p-10">
        <div className="text-center flex flex-col gap-4">
          <div>
            <h2 className="text-4xl text-white font-bold">{title}</h2>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">{shortDescription}</p>
          </div>
        </div>

        <div>
          {/* ---3 card--   */}
          <div className="flex flex-wrap justify-center sm:flex-row sm:items-center md:gap-10 gap-8 ">
            {expertData.map((items) => (
              <div
                key={items.id}
                className="min-w-55 sm:w-auto h-auto bg-neutral-900 rounded-xl flex flex-row  items-center"
              >
                <div className="flex flex-col items-center w-[220px]">
                  <div className="rounded-xl">
                    <Image
                      src={"/images/organization/formula.jpg"}
                      alt="Niwesh Shrestha"
                      width={220}
                      height={300}
                      className="rounded-t-xl"
                    />
                  </div>
                  <div className="flex flex-row justify-center items-center py-6 px-2 w-full gap-4">
                    <div className="flex flex-col items-start w-full">
                      <h3 className="font-semibold text-gray-300">
                        {items.name}
                      </h3>
                      <p className="text-xs text-muted-foreground wrap-break-word">
                        {items.position}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <InstagramIcon />
                      <LinkedInIcon />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
