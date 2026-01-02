import React from "react";
import About from "./(component)/About";
import ConnectWithUs from "./(component)/ConnectWithUs";
import MeetOurExperts from "./(component)/MeetOurExperts";
import WhatOurFounderSays from "./(component)/WhatOurFounderSays";
import GetStarted from "./(component)/GetStarted";
import OurVisions from "./(component)/OurVisions";
import { title } from "process";
import Footer from "@/components/footer/Footer";
import FooterComponent from "./(component)/FooterComponent";

const expertData = [
  { id: 1, name: "Niwesh Shrestha", position: "Senior Frontend Engineer" },
  { id: 2, name: "Abhisek Dahal", position: "Senior Backend Engineer" },
  { id: 3, name: "Pratik Joshi", position: "CEO" },
];

const ourVisionData = [
  {
    id: 1,
    title: "Our Story",
    description:
      "With Great Power COmes Great REsponsibility! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas possimus optio deleniti, tenetur non porro numquam beatae sunt suscipit, sed totam pariatur molestiae eaque minima iure estnam laborum. This is supreme power of my capability",
    imageUrl: "/images/organization/pratikdai.png",
  },
  {
    id: 2,
    title: "Our Target",
    description:
      "With Great Power COmes Great REsponsibility! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, quas possimus optio deleniti, tenetur non porro numquam beatae sunt suscipit, sed totam pariatur molestiae eaque minima iure estnam laborum. This is supreme power of my capability",
    imageUrl: "/images/organization/pratikdai.png",
  },
];

export default function AboutPage() {
  return (
    <section className="@container">
      <About />
      <ConnectWithUs />
      <OurVisions ourVisionData={ourVisionData} />

      <MeetOurExperts
        title="Meet Our Experts"
        shortDescription="Discover the passionate team of innovators, strategists, and
              customer success professionals working tirelessly to help you
              achieve your goals."
        expertData={expertData}
      />
      <WhatOurFounderSays />
      <GetStarted />
      <FooterComponent />
    </section>
  );
}
