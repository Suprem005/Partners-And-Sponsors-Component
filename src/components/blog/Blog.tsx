"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { Button } from "../ui/button";

type Blog = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
};

interface BlogListProps {
  title: string;
  description: string;
  position: "top" | "bottom";
  className: string;
  blogs: Blog[];
  view: "list" | "grid"; // ✅ NEW PROP
}

const BlogLists = ({
  title,
  description,
  position,
  className,
  blogs,
  view, // ✅ using prop instead of state
}: BlogListProps) => {
  return (
    <section className="@container py-20 border-b border-gray-200">
      {/* Title + View All Button */}
      <div
        className={`flex flex-row justify-between @md:flex-row @md:items-center @md:justify-between mb-4 ${className}`}
      >
        <h2 className="text-3xl @md:text-5xl font-bold mb-4 @md:mb-0">
          {title}
        </h2>

        {position === "top" && (
          <Button variant="secondary" asChild>
            <a
              target="blank"
              href="https://www.koenigsegg.com/model/sadairs-spear"
            >
              View all
            </a>
          </Button>
        )}
      </div>

      {/* Description */}
      <div className={`mb-6 ${className}`}>
        <p className="text-md @md:text-lg text-gray-600 text-justify">
          {description}
        </p>
      </div>

      {/* Blog Cards */}
      <div
        className={cn(
          `gap-8 ${className}`,
          view === "grid"
            ? "grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] @md:grid-cols-2 @3xl:grid-cols-3 @4xl:grid-cols-4"
            : "flex flex-col"
        )}
      >
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={cn(
              "rounded-md overflow-hidden hover:shadow-lg transition bg-white shadow-sm",
              view === "list" && "flex flex-row items-center gap-4 p-2"
            )}
          >
            {/* Image */}
            <div
              className={cn(
                "relative w-full h-48",
                view === "list" && "w-40 h-28 @md:w-48 @md:h-32"
              )}
            >
              <Image
                fill
                src={blog.imageUrl}
                alt={blog.title}
                className="object-cover rounded-md"
              />
            </div>

            {/* Text */}
            <div className="p-4 flex-1">
              <p className="font-semibold line-clamp-2">{blog.title}</p>
              <p className="text-sm text-gray-600 line-clamp-2">
                {blog.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Position for Button - View All */}
      {position === "bottom" && (
        <div className={`flex justify-center mt-10 ${className}`}>
          <Button variant="secondary" asChild>
            <a
              target="blank"
              href="https://www.koenigsegg.com/model/sadairs-spear"
            >
              View all
            </a>
          </Button>
        </div>
      )}
    </section>
  );
};

export default BlogLists;
