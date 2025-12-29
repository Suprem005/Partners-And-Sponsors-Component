import { CalendarHeart, Eye, MapPin, Share, Share2 } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Snowfall from "react-snowfall";
import { Badge } from "../ui/badge";
import { InstagramIcon } from "../icons/InstagramIcon";
import { LinkedInIcon } from "../icons";
import { GitHubIcon } from "../icons/GitHubIcon";
import { ButtonGroup } from "../ui/button-group";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";
import AppSlider from "./Swipper";
import Swip from "./swip";
import { FrequentlyAskQuestion } from "../faq/FrequentlyAskQuestion";
import MapComponent from "./MapComponent";
import { useEffect, useState } from "react";

interface HeroBlockProps {
  variant?: "one" | "two" | "three" | "four";
}

const slideData = [
  { id: 1, title: "Formula 1", imageUrl: "/images/organization/formula.jpg" },
  { id: 2, title: "Tech Expo", imageUrl: "/images/organization/formula.jpg" },
  {
    id: 3,
    title: "Startup Meet",
    imageUrl: "/images/organization/formula.jpg",
  },
  { id: 4, title: "Music Fest", imageUrl: "/images/organization/formula.jpg" },
];

function HeroBanner({ variant = "one" }: HeroBlockProps) {
  const componentMap = {
    one: <BannerOne />,
    two: <BannerTwo />,
    three: <BannerThree />,
    four: <BannerFour />,
  };
  return componentMap[variant];
}

function BannerOne() {
  return (
    <section className="@container relative flex flex-col  py-20 mt-4 mx-4 rounded-2xl border-b border-gray-200 bg-[url('/images/organization/mountain.jpg')] bg-no-repeat bg-center bg-cover">
      <div className={`absolute rounded-2xl inset-0 bg-black opacity-25 z-1`} />

      <div
        className={`px-6 relative z-2 inset-0 flex flex-col justify-center items-start @md:items-start text-white`}
      >
        <h2 className="text-5xl font-bold mb-9">Your Event Name</h2>

        <span className="flex mb-2">Wed Dec 17, 2025 1:17 PM</span>

        <span className="flex gap-2 mb-6">
          <MapPin /> Location
        </span>

        <div className="text-black">
          <Button variant="default">Select Tickets</Button>
        </div>
      </div>
    </section>
  );
}

function BannerTwo() {
  return (
    <section className="@container flex flex-col py-10 mt-4 mx-4 rounded-2xl border-b-2 hover:shadow-xl">
      {/* <div className={`absolute rounded-2xl inset-0 bg-black opacity-25 z-1`} /> */}

      <div className="mb-6 px-4">
        <Image
          className="w-full h-[300px] rounded-xl object-cover "
          src={"/images/organization/mountain.jpg"}
          alt="mountain"
          width={1280}
          height={980}
          quality={90}
        />
      </div>

      {/* contents */}
      <div className="flex flex-col justify-start @3xl:flex-row @3xl:gap-25 @3xl:items-center px-4">
        {/* contents except button  */}
        <div
          className={`mt-10 flex flex-col justify-center items-start w-full @3xl:w-2/3 text-black @3xl:border-r-3 border-dotted`}
        >
          <h2 className="text-4xl @lg:text-5xl font-bold mb-4 @3xl:mb-10">
            Your Event Name
          </h2>

          <span className="flex mb-2">Wed Dec 17, 2025 1:17 PM</span>

          <span className="flex gap-2 mb-5">
            <MapPin /> Location
          </span>
        </div>
        <div className="text-black @3xl:w-1/4 ">
          <Button
            className="@3xl:w-full h-[60px] rounded-2xl"
            variant="default"
          >
            Select Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}

function BannerThree() {
  return (
    <section className="@container flex flex-col w-full">
      <div className="w-full">
        <Image
          className="w-full h-[500px] object-cover "
          src={"/images/organization/mountain.jpg"}
          alt="Hero"
          width={1290}
          height={980}
        />
      </div>
      {/* contents */}
      <div className="flex flex-col justify-start @3xl:flex-row @3xl:justify-between @3xl:items-center px-4">
        {/* contents except button  */}
        <div
          className={`mt-10 flex flex-col justify-center items-start w-full @3xl:w-2/3 text-black @3xl:border-r-3 border-dotted`}
        >
          <h2 className="text-4xl @lg:text-5xl font-bold mb-4 @3xl:mb-10">
            Your Event Name
          </h2>

          <div className="mb-4 w-full flex gap-2">
            <Badge variant={"default"}>Exhibition</Badge>
            <Badge variant={"outline"}>#Music</Badge>
            <Badge variant={"outline"}>#Fun</Badge>
            <Badge variant={"outline"}>#Songs</Badge>
          </div>

          <span className="flex gap-2 mb-4">
            <CalendarHeart />
            Wed Dec 17, 2025 1:17 PM
          </span>

          <span className="flex gap-2 mb-5">
            <MapPin /> Location
          </span>
        </div>
        <div className="text-black flex @3xl:w-1/4 ">
          <Button className="w-full @3xl:w-full  h-10 " variant="default">
            Select Tickets
          </Button>
        </div>
      </div>
    </section>
  );
}

function BannerFour() {
  return (
    <section className="@container py-6">
      {/* wrapper  */}
      <div className="flex flex-col @2xl:flex-row items-start gap-12 px-6">
        {/* image  */}
        <div className="w-full @2xl:w-2/3">
          <Image
            className="w-full h-[280px] @md:h-[380px] @lg:h-[480px] rounded-md object-cover"
            src={"/images/organization/mountain.jpg"}
            alt="mountain"
            width={580}
            height={580}
            quality={90}
          />
        </div>

        {/* event ticket contents */}

        <div className="w-full @2xl:w-1/3 flex flex-col justify-start items-start px-2">
          {/* contents except button  */}
          <div
            className={`mt-10 flex flex-col justify-center items-start w-full @2xl:w-full text-black  `}
          >
            <h2 className="text-4xl @lg:text-5xl font-bold mb-4 @3xl:mb-10">
              Your Event Name
            </h2>

            <div className="mb-4 w-full flex flex-wrap gap-2">
              <Badge variant={"default"}>Exhibition</Badge>
              <Badge variant={"outline"}>#Music</Badge>
              <Badge variant={"outline"}>#Fun</Badge>
              <Badge variant={"outline"}>#Songs</Badge>
            </div>
            <span className="flex gap-2 mb-4">
              <CalendarHeart />
              Wed Dec 17, 2025 1:17 PM
            </span>

            <span className="flex gap-2 mb-5">
              <MapPin /> Location
            </span>

            <div className="text-black w-full">
              <Button className="w-full h-10" variant="default">
                Select Tickets
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function EventDetails() {
  const [hideBottomButton, setHideBottomButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight = 780;
      setHideBottomButton(window.scrollY < bannerHeight);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <HeroBanner variant="three" />
      {/* <Snowfall color="cyan" snowflakeCount={150} /> */}

      <section className="@container relative flex flex-col-reverse md:flex-row py-5 mt-4 mb-2 w-full">
        <div className={`flex flex-col @3xl:w-2/3 border-b pb-6`}>
          <div className="flex flex-col">
            {/* short description  */}
            <div className="mb-4  px-4">
              <p className="text-md italic text-muted-foreground border-b-2 border-dotted pb-4">
                &quot; Siliguri, brace yourselves! The one and only Yabesh
                Thapa, the youth sensation who’s taken the music scene by storm,
                is coming back to your city for an electrifying live
                performance. Mark your calendars — 7th December 2024 — because
                this is an event you won’t want to miss! &quot;
              </p>
            </div>

            <div className="px-4 border-b-2 border-dotted pb-4">
              <h2 className="text-2xl @3xl:text-3xl text-start font-semibold pb-4">
                Event Gallery
              </h2>
              {/* <Swip /> */}
            </div>
            {/* description  */}
            <div className="mt-4 px-4">
              <button className="text-2xl @3xl:text-3xl text-start font-semibold pb-4">
                Description
              </button>
            </div>
            <div className="border-b-2 border-gray-400 border-dotted px-4">
              <p className="text-justify pb-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Officiis itaque corporis vero rerum odit, amet quisquam dolores
                deleniti. Illum illo harum, laboriosam maxime labore ex rem id
                molestias modi. Iusto nostrum odio mollitia labore sequi quos
                autem tempore aut quam, esse totam, temporibus itaque dolores.
                Eius iure quisquam rem ea officia veritatis consequuntur
                placeat, labore odio explicabo sed quo expedita illum ratione
                nisi id alias dolor quis architecto corrupti repellendus quas.
                Voluptatibus sed officiis sint deleniti consequuntur ex veniam
                eum error nostrum exercitationem quas autem, hic beatae,
                quisquam odio aliquam placeat sapiente ullam rem. Atque quidem
                quia dolor dolorum itaque quaerat nesciunt velit commodi eaque,
                repellat officia delectus perferendis id laborum expedita minima
                ipsum ipsa sint eveniet beatae hic alias eligendi exercitationem
                animi? Ex, in enim! Eaque distinctio ratione reiciendis quaerat
                est quidem architecto explicabo nemo? Eveniet unde commodi
                cupiditate magni dignissimos iste vero! At temporibus hic cumque
                natus beatae dolorem tempora libero atque repudiandae harum
                unde, quod nisi quam eligendi. Provident magnam cum, quaerat
                nisi nemo quis necessitatibus dolor magni earum neque, eius
                voluptate, sunt omnis velit placeat harum saepe quisquam ratione
                commodi nostrum esse dicta expedita temporibus.
              </p>
            </div>

            {/* terms and conditions  */}
            <div className="mt-4 px-4">
              <button className="text-2xl @3xl:text-3xl text-start font-semibold pb-4">
                Terms and Conditions
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-2 px-4 pb-4 border-b-2 border-dotted text-justify">
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>

              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
              <li>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ducimus nesciunt quas odit. Rerum facere cumque
                reiciendis consectetur nam ullam mollitia doloremque ipsam ab, a
                officia facilis numquam nihil voluptatem!
              </li>
            </ol>
          </div>
          <div>
            <FrequentlyAskQuestion />
          </div>
          <div>
            <MapComponent />
          </div>
        </div>

        <div className="@3xl:sticky top-4 right-0  flex-col h-1/2 justify-center items-center p-2 @2xl:items-start mb-8 ">
          <div className="mb-4 flex flex-col justify-center items-center w-full h-1/2 border-2 rounded-2xl p-4 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-3">Your Event Name</h2>

            <span className="flex mb-2 text-md font-semibold">
              Wed Dec 17, 2025 1:17 PM
            </span>

            <span className="flex gap-2 mb-6">
              <MapPin /> Location
            </span>

            <div className="text-black w-full hidden @3xl:flex">
              <Button variant="default" className="w-full h-10">
                Select Tickets
              </Button>
            </div>
          </div>

          <div className="w-full flex flex-row gap-2">
            {/* view count  */}
            <div className="flex flex-row justify-start items-center w-1/3 border-2 rounded-2xl p-4 hover:shadow-lg">
              <div className="flex flex-row w-full gap-2 justify-center items-center">
                <Eye size={30} />
                <p className="text-md">50</p>
              </div>
            </div>

            <div className="flex flex-row gap-1 justify-center w-2/3 @3xl:gap-2  items-center border-2 rounded-2xl p-4 hover:shadow-lg ">
              <div className="flex gap-1 justify-center items-center font-mono border-r-2">
                <a className="flex items-center justify-center rounded-md hover:bg-gray-100">
                  <Share2 strokeWidth={2} size={20} /> Share
                </a>
              </div>

              {/* social media  */}
              <div className="flex flex-row gap-1">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="flex items-center justify-center  rounded-md hover:bg-gray-100"
                >
                  <InstagramIcon className="h-8 w-8" />
                </a>

                <a
                  href="https://www.linkedin.com/in/suprem-shrestha-9861992b1/"
                  className="flex items-center justify-center rounded-md hover:bg-gray-100"
                >
                  <LinkedInIcon className="h-8 w-8" />
                </a>
                <a
                  href="https://github.com/Suprem005"
                  target="_blank"
                  className="flex items-center justify-center rounded-md hover:bg-gray-100"
                >
                  <GitHubIcon className="h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
        {!hideBottomButton && (
          <div className="flex w-full justify-center fixed bottom-0 md:hidden bg-gray-100 p-4 z-50">
            <Button variant={"default"} className="w-full">
              Select Tickets
            </Button>
          </div>
        )}
      </section>
    </div>
  );
}
