"use client";

import EventDetails from "@/components/event-details/EventDetails";

const className: string = "max-w-7xl mx-auto px-6";

const blogsData = [
  {
    id: "1",
    title: "McLaren P1",
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: "/images/blog/mclaren.jpg",
  },
  {
    id: "2",
    title: "Porsche 911 GTR",
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: "/images/blog/mclaren.jpg",
  },
  {
    id: "3",
    title: "Lamborghini Countach",
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: "/images/blog/mclaren.jpg",
  },
  {
    id: "4",
    title: "Nissan Skyline GTR",
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: "/images/blog/mclaren.jpg",
  },
  {
    id: "5",
    title: "Mazda RX7",
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: "/images/blog/mclaren.jpg",
  },
  {
    id: "6",
    title: "Ferrari Stradale SF90",
    description:
      "The McLaren P1 is a limited-production, hybrid hypercar known for its extreme performance, officially produced from 2013 to 2015. It features a 3.8-liter twin-turbocharged V8 engine combined with an electric motor, producing a combined 916 horsepower, enabling it to accelerate from 0–100 km/h in 2.8 seconds. The P1 is also recognized for its advanced aerodynamics and driver-focused design, drawing heavily on McLaren's Formula 1 racing technology.",
    imageUrl: "/images/blog/mclaren.jpg",
  },
];

const clientData = [
  {
    id: 1,
    name: "Niwesh Shrestha",
    rating: 5,
    feedback:
      "Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees",
    date: "2025-12-04",
    imageUrl: "/images/nike.jpg",
  },
  {
    id: 2,
    name: "Abhisek Dahal",
    rating: 5,
    feedback:
      "Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees",
    date: "2025-12-04",
    imageUrl: "/images/nike.jpg",
  },
  {
    id: 3,
    name: "Pratik Dai",
    rating: 4,
    feedback:
      "Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees",
    date: "2025-12-04",
    imageUrl: "/images/nike.jpg",
  },
  {
    id: 4,
    name: "Naammuna Rai",
    rating: 1,
    feedback:
      "Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees",
    date: "2025-12-04",
    imageUrl: "/images/naammuna.jpg",
  },
  {
    id: 5,
    name: "Supreme Shrestha",
    rating: 2,
    feedback:
      "Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees",
    date: "2025-12-04",
    imageUrl: "/images/supreme.jpg",
  },
];

const partnersData = [
  { id: 1, name: "Microsoft", logoUrl: "/images/logos/microsoft.png" },
  { id: 2, name: "Google", logoUrl: "/images/logos/google.png" },
  { id: 3, name: "Amazon", logoUrl: "/images/logos/amazon.png" },
  { id: 4, name: "Netflix", logoUrl: "/images/logos/netflix.png" },
  { id: 5, name: "Tesla", logoUrl: "/images/logos/tesla.png" },
  { id: 6, name: "Meta", logoUrl: "/images/logos/meta.png" },
];

const values = [
  { id: 1, title: "super", label: "view all" },
  { id: 3, title: "duper", label: "view all" },
  { id: 4, title: "uper", label: "view all" },
  { id: 5, title: "kuper", label: "view all" },
  { id: 6, title: "cuper", label: "view all" },
];
const Home = () => {
  return (
    <div>
      {/* <AboutOrganizer
        title="About Our Platform"
        shortDescription='"We create innovative, user‑friendly solutions that blend design and technology to inspire and empower."'
        className={className}
        bodyDescription="We are an innovative platform built to simplify event booking and management. Our mission is to connect people with unforgettable experiences—whether concerts, conferences, weddings, or community gatherings. By combining user‑friendly design with smart technology, we make discovering, booking, and organizing events seamless, reliable, and enjoyable for everyone."
        button={{
          label: "Get Started",
          url: "https://goodgoing.iionstech.com.np/register",
        }}
        style={{ buttonStyle: "filled" }}
        textPosition="left"
        textAlignment="justify"
        buttonPosition="center"
        picturePosition="left"
        image={{ src: "/images/organization/formula.jpg", alt: "F1 RedBull" }}
      /> */}

      {/* <Reviews
        title={[
          { text: "What Our Client", color: "text-black" },
          { text: "Say!?", color: "text-black" },
        ]}
        titleDescription="At the heart of our brand is the trust and satisfaction of our customers. Every review reflects real experiences, honest feedback, and the value we strive to deliver. Whether it is praise for our quality, suggestions for improvement, or stories of how our product made a difference, these voices help us grow and inspire confidence for new customers. We believe reviews are not just ratings—they are conversations. Dive in below to see what our community has to say and discover why so many choose us."
        clientData={clientData}
        className="py-20 border-b border-gray-200"
        position="left"
      /> */}

      {/* <PartnersSponsors
        title="Our Clients"
        description="Trusted by high-growth startups across industries."
        limit={6}
        button={{ label: "See our clients", url: "facebook.com" }}
        style={{ buttonStyle: "outline", displayType: "carousel" }}
        partnerData={partnersData}
        className={className}
        textPosition="center"
        buttonPosition="center"
      /> */}

      {/* <CallToAction
        title="GoodGoing Events"
        description="We are an innovative platform built to simplify event booking and management. Our mission is to connect people with unforgettable experiences—whether concerts, conferences, weddings, or community gatherings. By combining user‑friendly design with smart technology, we make discovering, booking, and organizing events seamless, reliable, and enjoyable for everyone."
        buttonContents={{
          label: "Apply Now",
          url: "https://goodgoing.iionstech.com.np/register",
        }}
        style={{
          buttonStyle: "filled",
          titlePosition: "center",
          bodyPosition: "justify",
          buttonPosition: "center",
          overlayOpacity: 45,
        }}
        className={className}
      /> */}

      {/* <BlogLists
        title="Latest Blogs"
        position="top" // dynamic top or bottom position of BUTTON
        className={className}
        blogs={blogsData}
        description="A supercar is a high performance sports vehicle built for speed, precision, and luxury. Featuring powerful engines, lightweight materials, and advanced aerodynamics, it delivers thrilling acceleration and handling. Beyond performance, supercars symbolize exclusivity and innovation, blending cutting‑edge technology with striking design to create an aspirational driving experience admired worldwide."
        view="list"
      /> */}
      {/* <Grid data={values} /> */}
      {/* <Footer
        logo="/logo.svg"
        description="Building modern web experiences with clarity and performance."
        links={[
          { label: "About", url: "/about" },
          { label: "Contact", url: "/contact" },
          { label: "Privacy Policy", url: "/privacy" },
        ]}
        socialLinks={[
          { label: "Twitter", url: "https://twitter.com" },
          { label: "GitHub", url: "https://github.com" },
        ]}
        style={{
          textAlign: "center",
          fontSize: { title: "text-lg", description: "text-sm" },
        }}
      /> */}

      {/* <Footer
        footerTitle="GGEs"
        footerDescription="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, obcaecati. Quasi rem quidem ipsum dolorum fugiat odit similique insapiente maiores obcaecati nihil vel qui quaerat voluptatibus quas, amet ut."
        className={className}
      /> */}

      <EventDetails />
    </div>
  );
};

export default Home;
