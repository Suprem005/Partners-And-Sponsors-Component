'use-client';
import React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from './ui/card';
import Image from 'next/image';
import { Star } from 'lucide-react';

type clientReviewData = {
  id: number;
  name: string;
  rating: number;
  feedback: string;
  date: string;
  imageUrl: string;
};

interface CarouselComponentProps {
  clientData: clientReviewData[];
}

const CarouselComponent = ({ clientData }: CarouselComponentProps) => {
  const plugin = React.useRef(Autoplay({ delay: 3000 }));
  return (
    <div className=' flex justify-center items center mt-6 p-4'>
      <Carousel
        plugins={[plugin.current]}
        className='w-full max-w-5xl '
        onMouseEnter={() => plugin.current.stop()}
        onMouseLeave={() => plugin.current.play()}
      >
        <CarouselContent className='flex'>
          {clientData.map((items) => (
            <CarouselItem
              key={items.id}
              className='basis-full sm:basis-1/2 lg:basis-1/3 p-4'
            >
              <Card className='h-full bg-red-100 border-red-300 py-6'>
                <CardContent className='flex flex-col gap-4 '>
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
                  <p className='line-clamp-2 pb-8 text-sm text-muted-foreground'>
                    {items.feedback}
                  </p>
                  <div className='flex items-center gap-4 mt-auto'>
                    <Image
                      src={items.imageUrl}
                      alt={items.name}
                      width={50}
                      height={50}
                      className='rounded-full object-contain'
                    />
                    <div className='flex flex-col'>
                      <span className='text-base font-semibold'>
                        {items.name}
                      </span>

                      <span className='text-sm text-gray-500'>
                        {items.date}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
