import Image from "next/image";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface BlogAlternativesProps {
  variant?: "one" | "two";
}

function BlogAlternatives({ variant = "one" }: BlogAlternativesProps) {
  const componentMap = {
    one: <Blog1 />,
    two: <Blog2 />,
  };
  return componentMap[variant];
}

function Blog1() {
  return (
    <section className="@container">
      <div className="bg-white relative rounded-3xl p-4 min-h-[400px] w-full flex flex-col justify-end bg-[url('/images/organization/mountain.jpg')] bg-no-repeat bg-center bg-cover">
        {/* overlay  */}
        <div
          className={`absolute rounded-3xl inset-0 bg-black opacity-22 z-1`}
        />

        {/* content  */}
        <div className="relative z-2 inset-0 flex flex-col">
          <div className=" flex flex-row items-center justify-between py-4 border-b-2 border-white">
            <div>
              <h2 className="text-3xl text-white">Featured Blog</h2>
            </div>

            {/* images  */}
            {/* <div className="flex relative flex-row">
              <div className="">
                <Image
                  src={"/images/organization/mountain.jpg"}
                  width={20}
                  height={20}
                  alt="formula"
                  className="h-5 w-5 rounded-full object-cover"
                />
                <Image
                  src={"/images/organization/formula.jpg"}
                  width={20}
                  height={20}
                  alt="formula"
                  className="h-5 w-5 rounded-full object-cover"
                />
              </div>
            </div> */}
          </div>

          <div className=" flex flex-row items-center justify-between py-4 text-wrap">
            <div className="basis-2/4">
              <p className="text-xs text-white">
                Drive Into Our Handpicked Blog Posts: Trending, Insightful, And
                Worth Your Time
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-3 basis-1/4">
              <div>
                <p className="text-xs text-white">Total Blog</p>
              </div>
              <div>
                <p className="text-4xl text-red-300">5K+</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Blog2() {
  return <div>this is me</div>;
}

export default function BlogAlternativeDesign() {
  return (
    <div className="flex flex-row">
      <div className="px-4 py-4 basis-1/2">
        <BlogAlternatives variant="one" />
      </div>
      <div className="px-4 py-4 flex flex-col basis-1/2">
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
      </div>
    </div>
  );
}
