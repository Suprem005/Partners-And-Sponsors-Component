'use-client';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent } from './ui/card';

type clientReviewData = {
  id: number;
  name: string;
  rating: number;
  feedback: string;
  date: string;
  imageUrl: string;
};

interface CarouselComponentProps {
  className?: string;
  clientData: clientReviewData[];
}

const CarouselComponent = ({
  clientData,
  className,
}: CarouselComponentProps) => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <Carousel
      plugins={[plugin.current]}
      onMouseEnter={() => plugin.current.stop()}
      onMouseLeave={() => plugin.current.play()}
    >
      <CarouselContent className={`flex ${className}`}>
        {clientData.map((items) => (
          <CarouselItem
            key={items.id}
            className='basis-full sm:basis-1/2 lg:basis-1/3 p-4'
          >
            <Card className='border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition'>
              <CardContent className='flex flex-col gap-4 p-0'>
                {/* Row 1: Rating */}
                <div className='flex'>
                  {clientData.map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < items.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className='line-clamp-2 text-gray-700 text-sm mb-4 italic'>
                  {items.feedback}
                </p>
                <div className='flex items-center gap-5 mt-auto'>
                  <Image
                    src={items.imageUrl}
                    alt={items.name}
                    width={50}
                    height={50}
                    className='rounded-full object-contain'
                  />
                  <div className='flex flex-col'>
                    <p className='font-medium'>{items.name}</p>
                    <p className='text-sm text-gray-500'>{items.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default CarouselComponent;
