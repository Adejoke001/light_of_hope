import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import styles from './reviews.modules.css';
import Link from 'next/link';

const Page = () => {
  // Testimonial data
  const testimonials = [
    {
      name: "David Brown",
      role: "Global Partner",
      image: assets.Review,
      rating: 5,
      comment: "The volunteers were exceptional! Their dedication and professionalism made a significant impact on our community project."
    },
    {
      name: "Michael Chen",
      role: "Nonprofit Director",
      image: assets.Review2,
      rating: 4,
      comment: "We've worked with many volunteer organizations, but this team stands out for their commitment and skills."
    },
    {
      name: "Sarah Johnson",
      role: "Community Leader",
      image: assets.Review3,
      rating: 5,
      comment: "The volunteer team exceeded our expectations. They were punctual, enthusiastic, and made a real difference."
    },
    {
      name: "Emily Wilson",
      role: "Event Coordinator",
      image: assets.Review4,
      rating: 5,
      comment: "I was amazed by the professionalism of the volunteers. They handled everything with care and dedication."
    },
    {
      name: "Lisa Martha",
      role: "School Principal",
      image: assets.Review5,
      rating: 4,
      comment: "The volunteers transformed our school garden into a beautiful space for the children to learn and play."
    },
    {
      name: "Jake Thompson",
      role: "Community Center Director",
      image: assets.Review6,
      rating: 5,
      comment: "These volunteers are the heart of our community. Their selfless service inspires everyone around them."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say About <span className="text-fuchsia-600"><br/>Our Volunteers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who have experienced the dedication and compassion of our volunteer team firsthand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-8 flex flex-col items-center">
              {/* Circular image with increased size */}
              <div className="relative mb-6">
                <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-purple-100">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="object-cover"
                    fill
                    sizes="(max-width: 112px) 100vw"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-2 -right-2 bg-fuchsia-500 w-10 h-10 rounded-full flex items-center justify-center">
                  <Icon.Quotes className="w-5 h-5 text-white" />
                </div>
              </div>
              
              {/* Star rating positioned below the image */}
              <div className="flex justify-center mb-5">
                {[...Array(5)].map((_, i) => (
                  <Icon.Star 
                    key={i} 
                    weight={i < testimonial.rating ? "fill" : "regular"} 
                    className="w-5 h-5 text-yellow-400 mx-1" 
                  />
                ))}
              </div>
              
              {/* Testimonial content */}
              <div className="text-center mb-5">
                <p className="text-gray-600 italic text-lg">"{testimonial.comment}"</p>
              </div>
              
              {/* Client info */}
              <div className="text-center mt-auto">
                <h4 className="text-xl font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                <p className="text-fuchsia-700 font-medium">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
        
       
        <div className="text-center mt-16">
          <button className="read bg-fuchsia-500 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-flex items-center">
          <Link href='/rform'>  <span>Leave a Review</span></Link>
            <Icon.ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;