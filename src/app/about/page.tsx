'use client';
import AboutUs from '@/components/AboutUs';
import React from 'react';

const About = () => {
  return (
    <div>
      <AboutUs
        title={[
          { text: 'About', color: 'text-red-800' },
          { text: 'Us', color: 'text-black-800' },
        ]}
        description='Nike runner shoes are designed to deliver speed, comfort, and durability for athletes and everyday runners alike. Crafted with lightweight, breathable mesh uppers, they keep feet cool while reducing fatigue during long runs. Responsive midsoles, often featuring Nike’s Zoom Air or React foam technology, provide excellent cushioning and energy return, helping runners maintain momentum with less strain. The outsole patterns are engineered for traction across varied surfaces, ensuring stability whether on the track or city streets. With sleek designs and vibrant colorways, Nike runner shoes combine performance innovation with modern style, making them a trusted choice for fitness and lifestyle.'
        button={{ label: 'View More', url: 'youtube.com' }}
        image={{ src: '/images/nike.jpg', alt: 'Nike Runner' }}
        picturePosition='right'
      />
    </div>
  );
};

export default About;
