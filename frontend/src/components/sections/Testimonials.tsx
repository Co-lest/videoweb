import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import Container from '../ui/Container';

interface Testimonial {
  id: number;
  approved: boolean;
  quote: string;
  author: string;
  position: string;
  imageUrl: string;
}

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [allTestimonials, setAllTestimonials] = useState<Testimonial[]>([]); 
  const [approvedTestimonials, setApprovedTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const getData = async () => {
      //const backendPort = 7865;
      const url = `https://videoweb-eight.vercel.app/`;
  
      try {
        setIsLoading(true);
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data: Testimonial[] = await response.json();
        setAllTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError('Failed to load testimonials. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const filtered = allTestimonials.filter(t => t.approved);
    setApprovedTestimonials(filtered);

    if (currentIndex >= filtered.length && filtered.length > 0) {
      setCurrentIndex(filtered.length - 1);
    } else if (filtered.length === 0) {
      setCurrentIndex(0);
    }

    if (filtered.length > 0) {
      startAutoSlide();
    } else {
      stopAutoSlide();
    }

    return () => stopAutoSlide();
  }, [allTestimonials, currentIndex]);

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
    if (isAnimating || approvedTestimonials.length === 0) return;
    stopAutoSlide(); 
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? approvedTestimonials.length - 1 : prevIndex - 1
    );
    setTimeout(() => {
      setIsAnimating(false);
      startAutoSlide();
    }, 500); 
  };

  const goToNext = () => {
    if (isAnimating || approvedTestimonials.length === 0) return;
    stopAutoSlide(); 
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === approvedTestimonials.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => {
      setIsAnimating(false);
      startAutoSlide();
    }, 500);
  };

  // --- Render Logic ---

  if (isLoading) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container>
          <div className="text-center">
            <p>Loading testimonials...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container>
          <div className="text-center text-red-500">
            <p>{error}</p>
          </div>
        </Container>
      </section>
    );
  }

  if (approvedTestimonials.length === 0) {
    return (
      <section className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <Container>
          <div className="text-center">
            <p>No testimonials available to display.</p>
          </div>
        </Container>
      </section>
    );
  }

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
              {approvedTestimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
                    <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden flex-shrink-0 border-4 border-blue-100">
                      <img
                        src={testimonial.imageUrl}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                        loading="lazy"
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
              disabled={isLoading || approvedTestimonials.length === 0} 
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={goToNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 -mr-5"
              aria-label="Next testimonial"
              disabled={isLoading || approvedTestimonials.length === 0} 
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-8">
            {approvedTestimonials.map((_, index) => (
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