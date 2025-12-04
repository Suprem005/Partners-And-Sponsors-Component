'use-client';
import React from 'react';
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import CarouselComponent from './CarouselComponent';

type ColoredTitleProps = {
  text: string;
  color: string;
}[];

interface ReviewComponentProps {
  title: ColoredTitleProps;
  titleDescription: string;
}

const Reviews = ({ title, titleDescription }: ReviewComponentProps) => {
  return (
    <section className='flex justify-center items-center p-6 md:p-10 w-full'>
      <div className=' w-full max-w-5xl mt-6 pr-6 flex flex-col justify-center items-start'>
        <div className=' gap-4 w-full flex flex-col justify-center items-start text-justify'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            {title.map((part, i) => (
              <span key={i} className={part.color}>
                {part.text}{' '}
              </span>
            ))}
          </h1>
          <p className='text-md md: text-base '>{titleDescription}</p>
        </div>
        <div className='bg-emerald-600 w-full mt-4'></div>
      </div>
    </section>
  );
};

export default Reviews;
