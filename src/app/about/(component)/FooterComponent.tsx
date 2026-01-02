import Image from "next/image";
import React from "react";

export default function FooterComponent() {
  return (
    // wrapper
    <div className="bg-black p-6 sm:p-10">
      {/* card  */}
      <div className="bg-neutral-900 rounded-2xl p-8 flex sm:flex-row">
        {/* left content  */}
        <div className="flex flex-col">
          {/*icon + title  */}
          <div className="flex flex-row">
            {/* image  */}
            <div>
              <Image
                src={"/images/organization/fuji.jpg"}
                alt="fuji"
                width={20}
                height={20}
                loading="eager"
                className="rounded-full"
              />
            </div>
            {/* title  */}
            <div>
              <h2 className="text-2xl text-white font-bold ">About GGEvents</h2>
            </div>
          </div>
        </div>
        {/* right content  */}
        <div></div>
      </div>
    </div>
  );
}
