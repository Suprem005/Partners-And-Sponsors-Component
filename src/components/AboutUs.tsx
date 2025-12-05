'use client';
import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type ColoredTitleProps = {
  text: string;
  color: string;
}[];

type AboutUsProps = {
  title: ColoredTitleProps;
  description: string;
  image?: { src: string; alt: string };
  button: { label: string; url: string };
  picturePosition?: 'top' | 'bottom' | 'right' | 'left';
};

const AboutUs = ({
  title,
  description,
  image,
  button,
  picturePosition = 'left',
}: AboutUsProps) => {
  return (
    <section className=' flex justify-center items-center w-full py-20 border-b border-gray-200'>
      <div
        className={cn(
          'flex w-full max-w-5xl justify-center items-center gap-4 sm:gap-10  hover:shadow-lg transition rounded-2xl overflow-hidden bg-gray-100 p-6',
          picturePosition === 'left' && 'flex flex-col md:flex-row',
          picturePosition === 'right' && 'flex flex-col md:flex-row-reverse',
          picturePosition === 'top' && 'flex flex-col',
          picturePosition === 'bottom' && 'flex-col-reverse'
        )}
      >
        {image && (
          <div className='w-full md:w-full flex justify-center'>
            <Image
              width={600}
              height={300}
              src={image.src}
              alt={image.alt}
              className='rounded-lg object-fill sm:object-fill  w-full  h-auto  max-h-80 sm:m-12'
              loading='eager'
            />
          </div>
        )}
        <div className='w-full md:full flex flex-col justify-start items-start gap-4 text-justify sm: m-12'>
          <h1 className='text-4xl md:text-5xl font-bold'>
            {title.map((part, i) => (
              <span key={i} className={part.color}>
                {part.text}{' '}
              </span>
            ))}
          </h1>

          <p className='text-md md: text-base '>{description}</p>

          <div>
            {button && <Button variant='destructive'>{button.label}</Button>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
