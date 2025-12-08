import Autoplay from 'embla-carousel-autoplay';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';

type PartnerItems = {
  id: number;
  name: string;
  logoUrl: string;
};

interface PartnersSponsorsProps {
  title: string;
  description: string;
  limit?: number;
  button: { label: string; url: string };
  style?: {
    buttonStyle: 'filled' | 'outline';
    displayType: 'grid' | 'carousel';
  };
  partnerData: PartnerItems[];
  className: string;
  textPosition?: 'left' | 'center' | 'right';
  buttonPosition?: 'left' | 'center' | 'right';
}

export default function PartnersSponsors({
  title,
  description,
  limit = 5,
  button,
  style,
  partnerData,
  className,
  textPosition = 'left',
  buttonPosition = 'left',
}: PartnersSponsorsProps) {
  const TextPositionClass: Record<string, string> = {
    left: '!text-left',
    center: '!text-center',
    right: '!text-right',
  };
  const ButtonPositionClass: Record<string, string> = {
    left: '!justify-start',
    center: '!justify-center',
    right: '!justify-end',
  };
  const displayedItems = partnerData.slice(0, limit);
  const plugin = React.useRef(Autoplay({ delay: 2000 }));

  return (
    <section className='py-20 border-b border-gray-200'>
      {/* title and description  */}
      <div className={`${className} ${TextPositionClass[textPosition]}`}>
        <h2 className='text-5xl font-bold mb-4'>{title}</h2>
        <p
          className={`text-lg text-gray-600 mb-8 max-w-2xl${TextPositionClass[textPosition]} `}
        >
          {description}
        </p>
      </div>

      {/* logo image  */}
      <div className={`${className}`}>
        {style?.displayType === 'grid' ? (
          <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8'>
            {displayedItems.map((item) => (
              <div
                key={item.id}
                className='border border-gray-300 rounded-md  flex justify-center items-center hover:shadow-2xl shadow-gray-200'
              >
                <Image
                  src={item.logoUrl}
                  alt={item.name}
                  className='object-contain'
                  width={120}
                  height={120}
                  loading='eager'
                />
              </div>
            ))}
          </div>
        ) : (
          <Carousel
            plugins={[plugin.current]}
            className='w-full max-w-6xl'
            onMouseEnter={() => plugin.current.stop()}
            onMouseLeave={() => plugin.current.play()}
          >
            <CarouselContent>
              {displayedItems.map((item) => (
                <CarouselItem
                  key={item.id}
                  className='basis-full sm:basis-1/4 lg:basis-1/5 p-4'
                >
                  <div className='rounded-md flex justify-center items-center hover:shadow-lg shadow-gray-200'>
                    <Image
                      src={item.logoUrl}
                      alt={item.name}
                      className='object-contain'
                      width={120}
                      height={120}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </div>

      {/* button style  */}

      <div className={`${className}`}>
        <div
          className={`flex flex-wrap items center py-10 ${ButtonPositionClass[buttonPosition]}`}
        >
          <Button
            variant={style?.buttonStyle === 'filled' ? 'default' : 'outline'}
          >
            {button.label}
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
