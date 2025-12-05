'use client';
import AboutUs from '@/components/AboutUs';
import Reviews from '@/components/Reviews';

const clientData = [
  {
    id: 1,
    name: 'Niwesh Shrestha',
    rating: 5,
    feedback:
      'Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees',
    date: '2025-12-04',
    imageUrl: '/images/nike.jpg',
  },
  {
    id: 2,
    name: 'Abhisek Dahal',
    rating: 5,
    feedback:
      'Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees',
    date: '2025-12-04',
    imageUrl: '/images/nike.jpg',
  },
  {
    id: 3,
    name: 'Pratik Dai',
    rating: 4,
    feedback:
      'Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees',
    date: '2025-12-04',
    imageUrl: '/images/nike.jpg',
  },
  {
    id: 4,
    name: 'Naammuna Rai',
    rating: 1,
    feedback:
      'Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees',
    date: '2025-12-04',
    imageUrl: '/images/naammuna.jpg',
  },
  {
    id: 5,
    name: 'Supreme Shrestha',
    rating: 2,
    feedback:
      'Social media integration made promoting our events effortless. The custom payment options were a game-changer for our international attendees',
    date: '2025-12-04',
    imageUrl: '/images/supreme.jpg',
  },
];

const About = () => {
  return (
    <div>
      {/* <AboutUs
        title={[
          { text: 'About', color: 'text-red-800' },
          { text: 'Us', color: 'text-black-800' },
        ]}
        description='Nike runner shoes are designed to deliver speed, comfort, and durability for athletes and everyday runners alike. Crafted with lightweight, breathable mesh uppers, they keep feet cool while reducing fatigue during long runs. Responsive midsoles, often featuring Nike’s Zoom Air or React foam technology, provide excellent cushioning and energy return, helping runners maintain momentum with less strain. The outsole patterns are engineered for traction across varied surfaces, ensuring stability whether on the track or city streets. With sleek designs and vibrant colorways, Nike runner shoes combine performance innovation with modern style, making them a trusted choice for fitness and lifestyle.'
        button={{ label: 'View More', url: 'youtube.com' }}
        image={{ src: '/images/nike.jpg', alt: 'Nike Runner' }}
        picturePosition='left'
      /> */}

      <Reviews
        title={[
          { text: 'What Our Client', color: 'text-black' },
          { text: 'Say', color: 'text-black' },
        ]}
        titleDescription='At the heart of our brand is the trust and satisfaction of our customers. Every review reflects real experiences, honest feedback, and the value we strive to deliver. Whether it is praise for our quality, suggestions for improvement, or stories of how our product made a difference, these voices help us grow and inspire confidence for new customers. We believe reviews are not just ratings—they are conversations. Dive in below to see what our community has to say and discover why so many choose us.'
        clientData={clientData}
        className='py-20 border-b border-gray-200'
        position='left'
      />
    </div>
  );
};

export default About;
