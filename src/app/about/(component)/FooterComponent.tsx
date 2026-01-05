import { InputWithButton } from "@/app/utility/shadcn-components/InputWithButton";
import { InstagramIcon, LinkedInIcon } from "@/components/icons";
import { Facebook } from "@/components/icons/Facebook";
import { Twitter } from "@/components/icons/Twitter";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FooterComponent() {
  return (
    // wrapper
    <div className="bg-black p-6 sm:p-10">
      {/* card  */}
      <div className="bg-neutral-900 rounded-2xl p-8 flex flex-col items-start sm:items-center sm:flex-row gap-15 sm:justify-between">
        {/* left content  */}
        <div className="flex flex-col gap-6 sm:w-1/2">
          {/*titled image logo  */}

          <div>
            <Image
              src={"/images/organization/logo.png"}
              alt="fuji"
              width={120}
              height={10}
              loading="eager"
              className="min-w-[120px] h-[30px]"
            />
          </div>

          {/* short description  */}

          <div>
            <p className="text-sm text-muted-foreground">
              Discover the story behind our principles that guide us, and how we
              are dedicated to empowering your business to grow and thrive.
            </p>
          </div>

          {/* input with button  */}

          <div>
            <InputWithButton />
          </div>

          <div className="flex flex-row gap-2">
            <Facebook />
            <InstagramIcon />
            <LinkedInIcon />
            <Twitter />
          </div>
        </div>
        {/* right content  */}
        <div className="flex justify-center items-center w-full sm:w-1/2">
          {/* home  */}
          <div className="grid grid-cols-2 w-full grid-rows-4 items-center gap-4 sm:gap-2 text-gray-300">
            {/* <div>
              <Link href={"#"}>Home</Link>
            </div>
            <div>
              <Link href={"#"}>Features</Link>
            </div>
            <div>
              <Link href={"#"}>Products</Link>
            </div>
            <div>
              <Link href={"#"}>About</Link>
            </div>
            <div>
              <Link href={"#"}>Blog</Link>
            </div>

            <div>
              <Link href={"#"}>Contact</Link>
            </div>
            <div>
              <Link href={"#"}>Privacy Policy</Link>
            </div>
            <div>
              <Link href={"#"}>Terms and Conditions</Link>
            </div> */}

            <Link href={"#"}>Home</Link>
            <Link href={"#"}>Features</Link>
            <Link href={"#"}>Products</Link>
            <Link href={"#"}>About</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
