import { MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

interface HeroBlockProps {
  variant?: "one" | "two" | "three" | "four";
}

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
    <section className="@container">
      <div>
        <Image
          className="w-full h-[500px]  object-cover "
          src={"/images/organization/mountain.jpg"}
          alt="Hero"
          width={1290}
          height={980}
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

function BannerFour() {
  return (
    <section className="@container py-6">
      {/* wrapper  */}
      <div className="flex flex-col @2xl:flex-row items-start gap-12 mx-6">
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
            className={`@lg:mt-10 flex flex-col justify-center items-start w-full @2xl:w-full text-black  `}
          >
            <h2 className="text-3xl @md:text-4xl @lg:text-5xl font-bold mb-4 @3xl:mb-10">
              Your Event Name
            </h2>

            <span className="flex mb-2">Wed Dec 17, 2025 1:17 PM</span>

            <span className="flex gap-2 mb-5">
              <MapPin /> Location
            </span>

            <div className="text-black w-full">
              <Button className="w-full " variant="default">
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
  return (
    <div>
      <HeroBanner variant="four" />

      <section className="@container relative flex flex-col py-5 mt-4 mx-4 mb-2">
        <div className={`flex flex-col @2xl:flex-row  gap-15 border-b pb-6`}>
          <div className="w-full">
            <div className="flex mb-2">
              <button className="text-2xl font-semibold">Description</button>
            </div>
            <div className="border-b-2 border-gray-400 border-dotted">
              <p className="text-justify mb-4">
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

            <div className="flex mb-4 mt-4">
              <button className="text-2xl font-semibold">
                Terms and Conditions
              </button>
            </div>
            <ol className="list-decimal list-inside space-y-2">
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

          {/* sticky */}
          <div className="sticky top-4 right-0 flex flex-col w-full h-1/2 justify-center items-center  p-6 @2xl:items-start @2xl:w-[400px] border-2  rounded-2xl hover:shadow-lg">
            <h2 className="text-xl font-bold mb-3">Your Event Name</h2>

            <span className="flex mb-2 text-md font-semibold">
              Wed Dec 17, 2025 1:17 PM
            </span>

            <span className="flex gap-2 mb-6">
              <MapPin /> Location
            </span>

            <div className="text-black w-full">
              <Button variant="default" className="w-full">
                Select Tickets
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
