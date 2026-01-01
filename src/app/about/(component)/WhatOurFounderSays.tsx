import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Address } from "@/components/icons/Address";
import { Gmail } from "@/components/icons/Gmail";
import { Headset } from "@/components/icons/Headset";
import Image from "next/image";
import React from "react";

export default function WhatOurFounderSays() {
  return (
    <div className="bg-black">
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 p-6 sm:p-10">
        <div className="rounded-xl">
          <Image
            src={"/images/organization/pratikdai.png"}
            width={450}
            height={450}
            alt="Peter Joshi"
            className="rounded-xl min-w-[228px] w-[350px] h-[390px]"
          />
        </div>

        <div className="flex bg-neutral-900 rounded-xl min-w-[228px] w-[350px] h-[390px] p-6">
          <div className="flex flex-col items-start justify-between">
            <div>
              <p className="text-md text-gray-400 text-wrap">
                With Great Power COmes Great REsponsibility! Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Nemo, quas possimus optio
                deleniti, tenetur non porro numquam beatae sunt suscipit, sed
                totam pariatur molestiae eaque minima iure est nam laborum.
              </p>
            </div>

            <div className="w-full flex flex-row justify-between items-center">
              <div className="flex  flex-col gap-2">
                <div>
                  <h3 className="font-semibold text-gray-300">Peter Joshi</h3>
                </div>
                <div>
                  <p className="text-md text-muted-foreground text-wrap">
                    CEO of IIOns tech
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <InstagramIcon />
                <LinkedInIcon />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
