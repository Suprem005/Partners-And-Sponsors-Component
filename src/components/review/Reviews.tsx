'use-client';

import CarouselComponent from './CarouselComponent';

type ColoredTitleProps = {
  text: string;
  color: string;
}[];

type clientReviewData = {
  id: number;
  name: string;
  rating: number;
  feedback: string;
  date: string;
  imageUrl: string;
};

interface ReviewComponentProps {
  title: ColoredTitleProps;
  titleDescription: string;
  clientData: clientReviewData[];
  className: string;
  position?: 'left' | 'right' | 'center';
}

export default function SectionWrapper({
  title,
  titleDescription,
  clientData,
  className,
  position = 'left',
}: ReviewComponentProps) {
  const positionClasses: Record<string, string> = {
    left: '!text-left',
    right: '!text-right',
    center: '!text-center',
  };
  return (
    <section className={`@container ${className} `}>
      <div className={`max-w-5xl mx-auto px-6 ${positionClasses[position]}`}>
        <h2 className='text-3xl @md:text-5xl font-bold mb-4'>
          {title.map((part, i) => (
            <span key={i} className={part.color}>
              {part.text}{' '}
            </span>
          ))}
        </h2>
        <p className='text-gray-600 mb-10'>{titleDescription}</p>
      </div>
      <div className={`max-w-5xl mx-auto px-6`}>
        <CarouselComponent clientData={clientData} />
      </div>
    </section>
  );
}
