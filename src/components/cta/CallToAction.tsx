import { SquareArrowOutUpRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

// Content Tab
// title (string)
// description (string)
// cover image
// button ({label, URL})
// Style Tab
// Button Style(Filled, Outline)
// Cover Image Overlay opacity (Slider with %)
// Text Alignment (Left, Center, Right)
// Font Size (Title, Description)

type CallToActionProps = {
  title: string;
  description: string;
  buttonContents: { label: string; url: string };

  style?: {
    buttonStyle?: "filled" | "outline";
    bodyPosition?: "left" | "right" | "center" | "justify";
    titlePosition?: "left" | "right" | "center";
    buttonPosition?: "left" | "right" | "center";
    overlayOpacity?: number;
  };
  className: string;
};

export default function CallToAction({
  title,
  buttonContents,
  description,

  className,
  style,
}: CallToActionProps) {
  const TextPositionClass: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };
  const ButtonPositionClass: Record<string, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };

  const overlayOpacity = (style?.overlayOpacity ?? 40) / 100;

  return (
    <section className="@container py-20 relative border-b border-gray-200 bg-[url('/images/organization/wallpaper.jpg')] bg-no-repeat bg-center bg-cover">
      <div
        className="bg-black h-full w-full absolute top-0 left-0 z-0"
        style={{ opacity: overlayOpacity }}
      ></div>
      <div className="relative">
        <div className={`${TextPositionClass[style?.titlePosition || "left"]}`}>
          <h3 className="text-white text-3xl font-bold mb-6 @md:text-5xl">
            {title}
          </h3>
        </div>
        <div
          className={`${className}  ${
            TextPositionClass[style?.bodyPosition || "left"]
          }`}
        >
          <p className="text-white text-md mb-6">{description}</p>
        </div>
        <div
          className={`flex ${className} ${
            ButtonPositionClass[style?.buttonPosition || "center"]
          }`}
        >
          <Button
            variant={style?.buttonStyle === "filled" ? "default" : "outline"}
            className="flex justify-center items-center"
          >
            <a href={buttonContents.url}>{buttonContents.label}</a>
            <SquareArrowOutUpRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
