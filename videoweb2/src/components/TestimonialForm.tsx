import React, { useState } from 'react';
import { useTestimonialStore } from '../store/testimonials';
import Button from './ui/Button';
import Container from './ui/Container';

const TestimonialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    quote: '',
    author: '',
    position: '',
    imageUrl: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const addTestimonial = useTestimonialStore((state) => state.addTestimonial);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTestimonial(formData);
    setFormData({
      quote: '',
      author: '',
      position: '',
      imageUrl: '',
    });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Share Your Experience
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
            We value your feedback! Submit your testimonial below for review.
          </p>

          {submitted ? (
            <div className="bg-green-100 dark:bg-green-900 p-4 rounded-lg text-green-700 dark:text-green-100 text-center">
              Thank you for your testimonial! It has been submitted for review.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your Testimonial
                </label>
                <textarea
                  required
                  value={formData.quote}
                  onChange={(e) => setFormData({ ...formData, quote: e.target.value })}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  rows={4}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Position
                  </label>
                  <input
                    type="text"
                    required
                    placeholder='Client, Manager-company'
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Photo URL
                  </label>
                  <input
                    type="url"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                  />
                </div>
              </div>

              <Button type="submit" variant="primary" fullWidth>
                Submit Testimonial
              </Button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TestimonialForm;

// not must to put images will come to this