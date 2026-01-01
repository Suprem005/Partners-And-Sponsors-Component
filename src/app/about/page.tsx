import React from "react";
import About from "./(component)/About";
import ConnectWithUs from "./(component)/ConnectWithUs";
import MeetOurExperts from "./(component)/MeetOurExperts";
import WhatOurFounderSays from "./(component)/WhatOurFounderSays";

const expertData = [
  { id: 1, name: "Niwesh Shrestha", position: "Senior Frontend Engineer" },
  { id: 2, name: "Abhisek Dahal", position: "Senior Backend Engineer" },
  { id: 3, name: "Pratik Joshi", position: "CEO" },
];

export default function AboutPage() {
  return (
    <section className="@container">
      {/* <div className="box" id="id"> */}
      {/*   <div className="even:bg-amber-400 odd:bg-blue-200">AboutPage</div> */}
      {/*   <div className="even:bg-amber-400 odd:bg-blue-200">AboutPage</div> */}
      {/*   <div className="even:bg-amber-400 odd:bg-blue-200">AboutPage</div> */}
      {/*   <div className="even:bg-amber-400 odd:bg-blue-200">AboutPage</div> */}
      {/* </div> */}
      <About />
      <ConnectWithUs />
      <MeetOurExperts
        title="Meet Our Experts"
        shortDescription="Discover the passionate team of innovators, strategists, and
              customer success professionals working tirelessly to help you
              achieve your goals."
        expertData={expertData}
      />
      <WhatOurFounderSays />
    </section>
  );
}
