import React from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import Link from "next/link";

type blogData = {
  id: number;
  title: string;
  date: string;
  category: string[];
};

interface blogDataProps {
  blogs: blogData[];
}

export default function Blogs({ blogs }: blogDataProps) {
  return (
    <div>
      <Link
        href={"https://www.google.com/"}
        target="_blank"
        className="flex flex-col gap-4"
      >
        {blogs.map((item) => (
          <div
            key={item.id}
            className="flex flex-col pb-4 gap-4 border-b-2 last-of-type:border-0 sm:flex-row sm:gap-6"
          >
            {/* left portion ! */}
            <div className="flex flex-col flex-1">
              {/* title  */}

              <h2 className="text-xl sm:text-2xl pb-2 wrap-break-words">
                {item.title}
              </h2>

              {/* date  */}
              <div className="flex flex-row gap-1 flex-wrap">
                <Badge>{item.date}</Badge>

                {/* for category use map  */}

                {item.category.map((cat) => (
                  <Badge
                    key={cat}
                    variant={"default"}
                    className="hover:bg-emerald-800"
                  >
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>

            {/* right portion  */}

            <div className="flex items-center justify-start">
              <Button
                variant={"outline"}
                className="hover:bg-gray-200 h-12 w-12 p-0 shrink-0"
              >
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
                >
                  <path d="M18 8L22 12L18 16" />
                  <path d="M2 12H22" />
                </svg>
              </Button>
            </div>
          </div>
        ))}
      </Link>
    </div>
  );
}
