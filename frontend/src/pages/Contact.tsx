import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import TestimonialForm from '../components/TestimonialForm';
import Container from '../components/ui/Container';

const Contact: React.FC = () => {
  return (
    <div className="pt-20">
      <div className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100">
              Have a project in mind? Get in touch with our team to discuss how we can help bring your vision to life.
            </p>
          </div>
        </Container>
      </div>

      <ContactSection />

      <TestimonialForm />

      <section className="py-24 bg-white dark:bg-gray-900">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What is your typical turnaround time?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Turnaround times vary depending on the scope and complexity of the project. For standard photography sessions, we typically deliver within 1-2 weeks. Video projects generally take 2-4 weeks, while article writing can be completed within 3-7 business days for standard pieces.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Do you work with clients remotely?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we work with clients all over the country. While we prefer in-person meetings for local clients, we're well-equipped to handle remote projects through video calls, email, and project management tools.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How do you price your services?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                We offer both package-based and custom pricing depending on your needs. Our pricing is based on the scope of work, timeline, and specific deliverables. We provide detailed quotes after our initial consultation so you know exactly what to expect.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Do you offer ongoing content creation services?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Yes, we offer monthly retainer packages for clients who need ongoing content creation. These packages can include a mix of video, photography, and article writing services tailored to your specific needs and content calendar.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-600 dark:text-gray-300">
                While we work with clients across many industries, we have particular expertise in technology, healthcare, luxury goods, real estate, and hospitality. Our diverse team brings relevant experience to each project regardless of the industry.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Contact;
