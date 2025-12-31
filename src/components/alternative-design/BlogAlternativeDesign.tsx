import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import Blogs from "./Blogs";

const blogs = [
  {
    id: 1,
    title: "Why Youth Academics Are Shaping The Future of Soccer?",
    date: "March 12, 2025",
    category: ["Sports", "Reading"],
  },
  {
    id: 2,
    title: "How Grassroots Football Is Changing Player Development",
    date: "January 12, 2025",
    category: ["Sports", "Reading", "Social"],
  },
  {
    id: 3,
    title: "The Role of Technology in Modern Soccer Training",
    date: "December 12, 2025",
    category: ["Sports", "Technology"],
  },
];

interface BlogAlternativesProps {
  variant?: "one";
}

function BlogAlternatives({ variant = "one" }: BlogAlternativesProps) {
  const componentMap = {
    one: <Blog1 />,
  };
  return componentMap[variant];
}

function Blog1() {
  return (
    <section className="flex w-full">
      <div className="relative min-h-[400px] min-w-[288px] w-full rounded-3xl bg-[url('/images/organization/mountain.jpg')] bg-cover bg-center bg-no-repeat p-4 flex flex-col justify-end">
        {/* overlay */}
        <div className="absolute inset-0 rounded-3xl bg-black opacity-20 z-10 pointer-events-none" />

        {/* content */}
        <div className="relative z-20 flex flex-col">
          <div className="flex items-center justify-between py-4 border-b-2 border-white">
            <h2 className="text-3xl text-white">Featured Blog</h2>
          </div>

          <div className="flex items-center justify-between py-4 wrap-break-word">
            <div className="basis-2/4">
              <p className="text-xs text-white">
                Drive Into Our Handpicked Blog Posts: Trending, Insightful, And
                Worth Your Time
              </p>
            </div>

            <div className="flex items-center gap-3 basis-1/4">
              <p className="text-xs text-white">Total Blog</p>
              <p className="text-4xl text-red-300">5K+</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function BlogAlternativeDesign() {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-stretch p-4">
      <div className="rounded-3xl lg:w-1/2">
        <BlogAlternatives variant="one" />
      </div>
      {/* <div className="px-4 py-4 flex flex-col">
        <div className="flex flex-row pb-4 border-b-2 mb-4">
          <div className="flex flex-col ">
            <h2 className="text-2xl pb-2 text-wrap">
              Why Youth Academics Are Shaping The Future of Soccer ?
            </h2>

            <div className="flex flex-row gap-1">
              <Badge variant={"outline"}>March 12, 2025 </Badge>
              <Badge variant={"default"} className="hover:bg-emerald-800">
                Sports
              </Badge>
              <Badge variant={"default"} className="hover:bg-emerald-800">
                5min Reading
              </Badge>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button variant={"outline"} className="hover:bg-gray-200 h-20">
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
                className="lucide lucide-move-right-icon lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex flex-row pb-4 border-b-2 mb-4">
          <div className="flex flex-col ">
            <h2 className="text-3xl pb-2">
              Why Youth Academics Are Shaping The Future of Soccer ?
            </h2>

            <div className="flex flex-row gap-1">
              <Badge variant={"outline"}>March 12, 2025 </Badge>
              <Badge variant={"default"} className="hover:bg-emerald-800">
                Sports
              </Badge>
              <Badge variant={"default"} className="hover:bg-emerald-800">
                5min Reading
              </Badge>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button variant={"outline"} className="hover:bg-gray-200 h-20">
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
                className="lucide lucide-move-right-icon lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Button>
          </div>
        </div>
        <div className="flex flex-row pb-4 border-b-2 mb-4">
          <div className="flex flex-col ">
            <h2 className="text-3xl pb-2">
              Why Youth Academics Are Shaping The Future of Soccer ?
            </h2>

            <div className="flex flex-row gap-1">
              <Badge variant={"outline"}>March 12, 2025 </Badge>
              <Badge variant={"default"} className="hover:bg-emerald-800">
                Sports
              </Badge>
              <Badge variant={"default"} className="hover:bg-emerald-800">
                5min Reading
              </Badge>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <Button variant={"outline"} className="hover:bg-gray-200 h-20">
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
                className="lucide lucide-move-right-icon lucide-move-right"
              >
                <path d="M18 8L22 12L18 16" />
                <path d="M2 12H22" />
              </svg>
            </Button>
          </div>
        </div>
      </div> */}
      <div className="flex items-center lg:w-1/2">
        <Blogs blogs={blogs} />
      </div>
    </div>
  );
}
