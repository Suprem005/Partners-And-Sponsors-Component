import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <section className="bg-emerald-300 min-w-[600px] p-4 flex flex-col gap-10">
      {/* title,description  */}
      <div className="bg-amber-300 flex flex-col">
        <div className="flex">
          <Image
            width={80}
            height={40}
            src="/images/blog/mclaren.jpg"
            alt="logo"
          />
          <h2>Title</h2>
        </div>
        <p>Description</p>
        <Image
          width={40}
          height={40}
          src="/images/blog/mclaren.jpg"
          alt="logo"
        />
      </div>
      {/* footer linked contents grid */}
      <div className="grid grid-cols-3 row-auto gap-6">
        <div className="bg-blue-300 flex flex-col">
          <h2 className="font-semibold">Products</h2>
          <a href="google.com">Features</a>
          <a href="google.com">Pricing</a>
        </div>
        <div className="bg-pink-300">
          <h2 className="font-semibold">Resources</h2>
        </div>
        <div className="bg-blue-300">
          <h2 className="font-semibold">Company</h2>
        </div>
      </div>
    </section>
  );
}
