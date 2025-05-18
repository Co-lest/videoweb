import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  position: string;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "The video production team at CreativeStudio delivered beyond our expectations. The quality and creativity they brought to our brand campaign significantly increased our engagement metrics.",
      author: "Sarah Johnson",
      position: "Marketing Director - echVision Inc.",
      imageUrl: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg"
    },
    {
      id: 2,
      quote: "Their photography services are top-notch. The product shots they delivered helped us increase our conversion rate by 35% within the first month of launching our new collection.",
      author: "Michael Chen",
      position: "E-commerce Manager - Luxe Lifestyle",
      imageUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg"
    },
    {
      id: 3,
      quote: "The articles created by CreativeStudio's team have significantly improved our organic traffic. Their ability to craft SEO-friendly content while maintaining a compelling narrative is impressive.",
      author: "Jessica Williams",
      position: "Digital Strategy Lead - Global Insights",
      imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg"
    }
  ];

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      goToNext();
    }, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const goToPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
    setTimeout(() => setIsAnimating(false), 500);
    startAutoSlide();
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
    setTimeout(() => setIsAnimating(false), 500);
    startAutoSlide();
  };

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            We take pride in exceeding our clients' expectations with every project.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <Quote className="h-10 w-10 text-blue-100 mb-4" />
                      <p className="text-gray-700 text-lg italic mb-6">{testimonial.quote}</p>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-blue-600">{testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={goToPrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 -ml-5"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 -mr-5"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  startAutoSlide();
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;