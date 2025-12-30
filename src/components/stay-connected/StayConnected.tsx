import React from "react";
import { Button } from "../ui/button";

export default function StayConnected() {
  return (
    <section className="@container flex flex-col flex-wrap justify-center items-center p-5">
      <div className="bg-gray-100 p-4 rounded-xl w-[350px] flex flex-col gap-4">
        <div className="pb-2 border-b-2">
          <h2 className="text-xl">Stay Connected</h2>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between">
            <Button className="w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-twitter-icon lucide-twitter"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              Twitter
            </Button>

            <p className="text-xs italic text-muted-foreground">
              23.4k follower
            </p>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Button className="w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              Facebook
            </Button>
            <p className="text-xs italic text-muted-foreground">
              23.4k follower
            </p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <Button className="w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram-icon lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>{" "}
              Instagram
            </Button>
            <p className="text-xs italic text-muted-foreground">
              23.4k follower
            </p>
          </div>

          <div className="flex flex-row items-center justify-between">
            <Button className="w-[150px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </Button>
            <p className="text-xs italic text-muted-foreground">
              23.4k follower
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
