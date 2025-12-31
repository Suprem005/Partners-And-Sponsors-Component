import { Address } from "@/components/icons/Address";
import { Gmail } from "@/components/icons/Gmail";
import { Headset } from "@/components/icons/Headset";
import React from "react";

export default function ConnectWithUs() {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-10 p-6 sm:p-10">
        <div className="text-center flex flex-col gap-4">
          <div>
            <h2 className="text-4xl text-white font-bold">
              Reach Out To Us Today
            </h2>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">
              Whether you need support or want to learn more, we are here to
              assist you.
            </p>
          </div>
        </div>

        <div>
          {/* ---3 card--   */}
          <div className="flex flex-wrap sm:flex-row justify-center sm:items-center md:gap-10 gap-8 ">
            {/* gmail  */}
            <div className="min-w-55 h-30 bg-neutral-900 rounded-xl flex flex-row p-2 items-center">
              <div className="flex flex-row gap-4 w-full">
                <div>
                  <Gmail />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h3 className="font-semibold text-gray-300">Email</h3>
                  <p className="text-xs text-gray-300 wrap-break-word">
                    suprem.sthao7@gmail.com
                  </p>
                </div>
              </div>
            </div>

            {/* phone  */}
            <div className="min-w-55 h-30 bg-neutral-900 rounded-xl flex flex-row p-2 items-center">
              <div className="flex flex-row gap-4 w-full">
                <div>
                  <Headset />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h3 className="font-semibold text-gray-300">Phone</h3>
                  <p className="text-xs wrap-break-word text-gray-300">
                    +977-9841079523
                  </p>
                </div>
              </div>
            </div>

            {/* Address  */}
            <div className="min-w-55 h-30 bg-neutral-900 rounded-xl flex flex-row p-2 items-center">
              <div className="flex flex-row gap-4 w-full">
                <div>
                  <Address />
                </div>
                <div className="flex flex-col items-start w-full">
                  <h3 className="font-semibold text-gray-300">Address</h3>
                  <p className="text-xs wrap-break-word text-gray-300">
                    Bishal Chowk, Lazimpat
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
