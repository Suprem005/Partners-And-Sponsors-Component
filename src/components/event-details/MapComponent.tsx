import React from "react";

export default function MapComponent() {
  return (
    <div className="mt-4 px-4">
      <div>
        <h3 className="text-2xl uppercase @3xl:text-3xl text-start font-semibold pb-4">
          Where we at!?
        </h3>
      </div>
      <div className="flex w-full justify-center items-center py-4">
        <iframe
          className="w-full object-contain rounded-2xl hover:shadow-2xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.703999166273!2d85.31924457526637!3d27.7264240761716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1b67ff91913b%3A0xfabae6a86b16b1fe!2sIIONS%20Technology%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1766484663490!5m2!1sen!2snp"
          width="900"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
