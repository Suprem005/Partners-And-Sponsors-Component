// Event Details Components

// Cover Image

// Basic Information
//   Event title
//   Event category & tags
//   Short description / excerpt
//   Description / Body
//   Views count
// Date & Time
//   Event start & end date
//   Timezone

// Organizer / host
//   Logo
//   Organizer Name
//   short description

// Media & Assets
//   Gallery images
//   Promo video
//   Downloads (brochure, schedule PDF)

// Location & Venue
//   Venue name
//   Contact email
//   phone
//   capacity
//   Full address
//       Country
//       State
//       City
//       address_line_1
//       address_line_2
//   Map iframe or Map (latitude, longitude)

// Ticketing & Pricing
//   Ticket name (General, VIP, Early Bird)
//   Price & currency
//   Quantity / capacity
//   Sale start & end
//   Per-order & per-ticket limits
//   Booking fee

// import React from "react";

// interface EventDetailsProps {
//   title: string;
//   shortDescription: string;
//   bodyDescription: string;
// }

// export default function EventDetails() {
//   return (
//     // <section className="@container py-20 border-b border-gray-200">
//     //   <div className="max-w-7xl mx-auto px-6"></div>
//     // </section>
//     <></>
//   );
// }

// * getFullYear = 2025
// * toLocaleString = 12/16/2025, 5:09:49 PM
// * toLocaleDateString = 12/16/2025
// * toString = Tue Dec 16 2025 17:31:23 GMT+0545 (Nepal Time)

import React from "react";

export default function EventDetails() {
  const date = new Date();
  return console.log(date.toString());
}
