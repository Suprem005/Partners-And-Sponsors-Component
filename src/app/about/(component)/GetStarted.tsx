import { Button } from "@/components/ui/button";
import React from "react";

export default function GetStarted() {
  return (
    <div className="bg-black p-6 sm:p-10">
      <div>
        <div className="relative bg-[url('/images/organization/fuji.jpg')] bg-no-repeat bg-center bg-cover rounded-xl pb-6 px-6 pt-10 sm:pt-25 flex flex-col justify-end items-center text-center gap-6">
          <div
            className={`absolute rounded-2xl inset-0 bg-black opacity-30 z-1`}
          />
          <div className="relative inset-0 z-2 flex flex-col gap-6 ">
            {/* title  */}
            <div>
              <h2 className="text-4xl text-white font-bold">
                Get more clicks, grow your business
              </h2>
            </div>

            {/* short description  */}
            <div>
              <p className="text-sm text-white">
                Simple tools and smart insights to help you engage you!
              </p>
            </div>

            {/* button  */}
            <div>
              <Button
                variant={"outline"}
                className=" bg-transparent text-white rounded-3xl px-6"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
