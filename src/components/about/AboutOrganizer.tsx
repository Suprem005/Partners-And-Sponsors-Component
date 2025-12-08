import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { ChevronRight } from 'lucide-react';

type AboutOrganizerProps = {
  title: string;
  shortDescription: string;
  bodyDescription: string;
  image: { src: string; alt: string };
  button: { label: string; url: string };
  style?: {
    buttonStyle: 'filled' | 'outline';
  };
  textPosition?: 'left' | 'center' | 'right';
  textAlignment?: 'left' | 'right' | 'justify' | 'center';
  buttonPosition?: 'left' | 'center' | 'right';
  picturePosition?: 'right' | 'left';
  className: string;
};

export default function AboutOrganizer({
  title,
  shortDescription,
  bodyDescription,
  button,
  image,
  style,
  textPosition = 'left',
  textAlignment = 'left',
  picturePosition = 'left',
  buttonPosition = 'left',

  className,
}: AboutOrganizerProps) {
  const TextPositionClass: Record<string, string> = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  };

  const TextAlignmentClass: Record<string, string> = {
    justify: 'text-justify',
    center: 'text-center',
    left: 'text-left',
    right: 'text-right',
  };

  const ButtonPositionClass: Record<string, string> = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  };
  const PicturePositionClass: Record<string, string> = {
    left: 'flex-col md:flex-row',
    right: 'flex-col md:flex-row-reverse',
  };

  return (
    <section className='py-20 border-b border-gray-200'>
      {/* title and short description part  */}
      <div className={`${className} ${TextPositionClass[textPosition]}`}>
        <h1 className='text-5xl font-bold mb-6 leading-tight'>{title}</h1>
        <p
          className={`text-lg text-gray-600 mb-8 max-w-2xl${TextPositionClass[textPosition]} `}
        >
          {shortDescription}
        </p>
      </div>

      {/* image and body description  */}
      <div
        className={`flex ${PicturePositionClass[picturePosition]} gap-8 md:gap-10 ${className}`}
      >
        {/* Image column */}
        <div className='w-full md:w-1/2'>
          <Image
            src={image.src}
            alt={image.alt}
            width={800}
            height={600}
            className='w-full h-auto object-contain rounded-lg'
          />
        </div>

        {/* Text + Button column */}
        <div className='w-full md:w-1/2 flex flex-col justify-center gap-8'>
          <div
            className={`flex flex-col gap-4 ${TextPositionClass[textPosition]} `}
          >
            <p className={`text-gray-600 ${TextAlignmentClass[textAlignment]}`}>
              {bodyDescription}
            </p>
            <p className={`text-gray-600 ${TextAlignmentClass[textAlignment]}`}>
              {bodyDescription}
            </p>
          </div>

          <div className={`flex ${ButtonPositionClass[buttonPosition]}`}>
            <Button
              variant={style?.buttonStyle === 'filled' ? 'default' : 'outline'}
              className='flex items-center gap-2'
            >
              <a href='https://goodgoing.iionstech.com.np/register'>
                {button.label}
              </a>

              <ChevronRight className='w-4 h-4' />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
