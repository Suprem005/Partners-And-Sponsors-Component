interface FooterProps {
  footerTitle: string;
  footerDescription: string;
  className: string;
}

export default function Footer({
  footerTitle,
  footerDescription,
  className,
}: FooterProps) {
  return (
    <section className="@container py-20 border-b border-gray-200">
      <div
        className={`${className} flex flex-col items-center @lg:flex-row @lg:justify-between @lg:items-start gap-12`}
      >
        {/* title,description  */}
        <div
          className={`flex flex-col items-center text-center @lg:items-start @lg:text-left gap-6 w-full @lg:w-1/2`}
        >
          <div className="flex gap-2">
            <svg
              width="40px"
              height="40px"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <rect x="0" fill="none" width="20" height="20"></rect>{" "}
                <g>
                  {" "}
                  <path d="M20 5.38L18.99 8.2v-.01c-1.04-.37-2.19.18-2.57 1.22-.37 1.04.17 2.19 1.22 2.56v.01l-1.01 2.82L1.57 9.42l.99-2.79c1.04.38 2.19-.17 2.56-1.21s-.17-2.18-1.21-2.55L4.93 0zm-5.45 3.37c.74-2.08-.34-4.37-2.42-5.12-2.08-.74-4.37.35-5.11 2.42-.74 2.08.34 4.38 2.42 5.12 2.07.74 4.37-.35 5.11-2.42zm-2.56-4.74c.89.32 1.57.94 1.97 1.71-.01-.01-.02-.01-.04-.02-.33-.12-.67.09-.78.4-.1.28-.03.57.05.91.04.27.09.62-.06 1.04-.1.29-.33.58-.65 1l-.74 1.01.08-4.08.4.11c.19.04.26-.24.08-.29 0 0-.57-.15-.92-.28-.34-.12-.88-.36-.88-.36-.18-.08-.3.19-.12.27 0 0 .16.08.34.16l.01 1.63L9.2 9.18l.08-4.11c.2.06.4.11.4.11.19.04.26-.23.07-.29 0 0-.56-.15-.91-.28-.07-.02-.14-.05-.22-.08.93-.7 2.19-.94 3.37-.52zM7.4 6.19c.17-.49.44-.92.78-1.27l.04 5c-.94-.95-1.3-2.39-.82-3.73zm4.04 4.75l2.1-2.63c.37-.41.57-.77.69-1.12.05-.12.08-.24.11-.35.09.57.04 1.18-.17 1.77-.45 1.25-1.51 2.1-2.73 2.33zm-.7-3.22l.02 3.22c0 .02 0 .04.01.06-.4 0-.8-.07-1.2-.21-.33-.12-.63-.28-.9-.48zm1.24 6.08l2.1.75c.24.84 1 1.45 1.91 1.45H16v3H0v-2.96c1.1 0 2-.89 2-2 0-1.1-.9-2-2-2V9h1.05l-.28.8 4.28 1.52C4.4 12.03 4 12.97 4 14c0 2.21 1.79 4 4 4s4-1.79 4-4c0-.07-.02-.13-.02-.2zm-6.53-2.33l1.48.53c-.14.04-.15.27.03.28 0 0 .18.02.37.03l.56 1.54-.78 2.36-1.31-3.9c.21-.01.41-.03.41-.03.19-.02.17-.31-.02-.3 0 0-.59.05-.96.05-.07 0-.15 0-.23-.01.13-.2.28-.38.45-.55zM4.4 14c0-.52.12-1.02.32-1.46l1.71 4.7C5.23 16.65 4.4 15.42 4.4 14zm4.19-1.41l1.72.62c.07.17.12.37.12.61 0 .31-.12.66-.28 1.16l-.35 1.2zM11.6 14c0 1.33-.72 2.49-1.79 3.11l1.1-3.18c.06-.17.1-.31.14-.46l.52.19c.02.11.03.22.03.34zm-4.62 3.45l1.08-3.14 1.11 3.03c.01.02.01.04.02.05-.37.13-.77.21-1.19.21-.35 0-.69-.06-1.02-.15z"></path>{" "}
                </g>{" "}
              </g>
            </svg>
            <h2 className="font-bold text-4xl">{footerTitle}</h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg">{footerDescription}</p>
          </div>
          <div className="flex gap-2">
            <svg
              fill="#000000"
              width="28px"
              height="28px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M20.445 5h-8.891A6.559 6.559 0 0 0 5 11.554v8.891A6.559 6.559 0 0 0 11.554 27h8.891a6.56 6.56 0 0 0 6.554-6.555v-8.891A6.557 6.557 0 0 0 20.445 5zm4.342 15.445a4.343 4.343 0 0 1-4.342 4.342h-8.891a4.341 4.341 0 0 1-4.341-4.342v-8.891a4.34 4.34 0 0 1 4.341-4.341h8.891a4.342 4.342 0 0 1 4.341 4.341l.001 8.891z"></path>
                <path d="M16 10.312c-3.138 0-5.688 2.551-5.688 5.688s2.551 5.688 5.688 5.688 5.688-2.551 5.688-5.688-2.55-5.688-5.688-5.688zm0 9.163a3.475 3.475 0 1 1-.001-6.95 3.475 3.475 0 0 1 .001 6.95zM21.7 8.991a1.363 1.363 0 1 1-1.364 1.364c0-.752.51-1.364 1.364-1.364z"></path>
              </g>
            </svg>

            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M18.72 3.99997H5.37C5.19793 3.99191 5.02595 4.01786 4.86392 4.07635C4.70189 4.13484 4.55299 4.22471 4.42573 4.34081C4.29848 4.45692 4.19537 4.59699 4.12232 4.75299C4.04927 4.909 4.0077 5.07788 4 5.24997V18.63C4.01008 18.9901 4.15766 19.3328 4.41243 19.5875C4.6672 19.8423 5.00984 19.9899 5.37 20H18.72C19.0701 19.9844 19.4002 19.8322 19.6395 19.5761C19.8788 19.32 20.0082 18.9804 20 18.63V5.24997C20.0029 5.08247 19.9715 4.91616 19.9078 4.76122C19.8441 4.60629 19.7494 4.466 19.6295 4.34895C19.5097 4.23191 19.3672 4.14059 19.2108 4.08058C19.0544 4.02057 18.8874 3.99314 18.72 3.99997ZM9 17.34H6.67V10.21H9V17.34ZM7.89 9.12997C7.72741 9.13564 7.5654 9.10762 7.41416 9.04768C7.26291 8.98774 7.12569 8.89717 7.01113 8.78166C6.89656 8.66615 6.80711 8.5282 6.74841 8.37647C6.6897 8.22474 6.66301 8.06251 6.67 7.89997C6.66281 7.73567 6.69004 7.57169 6.74995 7.41854C6.80986 7.26538 6.90112 7.12644 7.01787 7.01063C7.13463 6.89481 7.2743 6.80468 7.42793 6.74602C7.58157 6.68735 7.74577 6.66145 7.91 6.66997C8.07259 6.66431 8.2346 6.69232 8.38584 6.75226C8.53709 6.8122 8.67431 6.90277 8.78887 7.01828C8.90344 7.13379 8.99289 7.27174 9.05159 7.42347C9.1103 7.5752 9.13699 7.73743 9.13 7.89997C9.13719 8.06427 9.10996 8.22825 9.05005 8.3814C8.99014 8.53456 8.89888 8.6735 8.78213 8.78931C8.66537 8.90513 8.5257 8.99526 8.37207 9.05392C8.21843 9.11259 8.05423 9.13849 7.89 9.12997ZM17.34 17.34H15V13.44C15 12.51 14.67 11.87 13.84 11.87C13.5822 11.8722 13.3313 11.9541 13.1219 12.1045C12.9124 12.2549 12.7546 12.4664 12.67 12.71C12.605 12.8926 12.5778 13.0865 12.59 13.28V17.34H10.29V10.21H12.59V11.21C12.7945 10.8343 13.0988 10.5225 13.4694 10.3089C13.84 10.0954 14.2624 9.98848 14.69 9.99997C16.2 9.99997 17.34 11 17.34 13.13V17.34Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>

            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title>github</title>{" "}
                <rect width="24" height="24" fill="none"></rect>{" "}
                <path d="M12,2A10,10,0,0,0,8.84,21.5c.5.08.66-.23.66-.5V19.31C6.73,19.91,6.14,18,6.14,18A2.69,2.69,0,0,0,5,16.5c-.91-.62.07-.6.07-.6a2.1,2.1,0,0,1,1.53,1,2.15,2.15,0,0,0,2.91.83,2.16,2.16,0,0,1,.63-1.34C8,16.17,5.62,15.31,5.62,11.5a3.87,3.87,0,0,1,1-2.71,3.58,3.58,0,0,1,.1-2.64s.84-.27,2.75,1a9.63,9.63,0,0,1,5,0c1.91-1.29,2.75-1,2.75-1a3.58,3.58,0,0,1,.1,2.64,3.87,3.87,0,0,1,1,2.71c0,3.82-2.34,4.66-4.57,4.91a2.39,2.39,0,0,1,.69,1.85V21c0,.27.16.59.67.5A10,10,0,0,0,12,2Z"></path>{" "}
              </g>
            </svg>

            <svg
              width="28px"
              height="28px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                  fill="#000000"
                ></path>{" "}
              </g>
            </svg>
          </div>
        </div>

        {/* footer linked contents grid */}

        <div
          className={` grid grid-cols-1 @md:grid-cols-2 @xl:grid-cols-3 row-auto gap-6`}
        >
          <div className=" rounded-2xl flex flex-col items-center gap-1">
            <a className="font-semibold text-md @md:text-lg pb-2">Home</a>
            <a
              className="text-muted-foreground text-sm @md:text-md"
              href="google.com"
            >
              Products
            </a>
            <a
              className="text-muted-foreground text-sm @md:text-md"
              href="google.com"
            >
              Features
            </a>
            <a
              className="text-muted-foreground text-sm @md:text-md"
              href="google.com"
            >
              Register
            </a>
          </div>
          <div className=" rounded-2xl flex flex-col items-center gap-1">
            <a className="font-semibold text-md @md:text-lg">Resources</a>
            <a
              className="text-muted-foreground text-sm @md:text-md"
              href="google.com"
            >
              Blog
            </a>
            <a
              className="text-muted-foreground text-sm @md:text-md"
              href="google.com"
            >
              Documentation
            </a>
            <a
              className="text-muted-foreground text-sm @md:text-md"
              href="google.com"
            >
              Support
            </a>
          </div>
          <div className=" rounded-2xl  flex flex-col items-center gap-1">
            <a className="font-semibold text-md @lg:text-lg">Company</a>
            <a className="text-muted-foreground text-sm @lg:text-md ">About</a>
            <a className="text-muted-foreground text-sm @lg:text-md">Careers</a>
            <a className="text-muted-foreground text-sm @lg:text-md">Contact</a>
            <a className="text-muted-foreground text-sm @lg:text-md">
              Partners
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
