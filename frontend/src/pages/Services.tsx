import React from "react";
import {
  Camera,
  Video,
  PenTool,
  Users,
  Calendar,
  Award,
  Check,
} from "lucide-react";
import Container from "../components/ui/Container";
import ContactSection from "../components/sections/ContactSection";

const ServicePage: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Services Hero */}
      <div className="relative py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Professional Services
            </h1>
            <p className="text-xl text-blue-100">
              From concept to delivery, we provide end-to-end creative solutions
              for brands and businesses of all sizes.
            </p>
          </div>
        </Container>
      </div>

      {/* Video Production */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-lg mb-6">
                <Video className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Video Production
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our video production team creates compelling visual stories that
                captivate your audience and communicate your message
                effectively.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Promotional Videos
                    </h3>
                    <p className="text-gray-600">
                      Short, impactful videos designed to promote your products
                      or services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Corporate Films
                    </h3>
                    <p className="text-gray-600">
                      Professional corporate videos that showcase your company's
                      values and culture.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Event Coverage
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive video coverage of corporate events,
                      conferences, and product launches.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Social Media Content
                    </h3>
                    <p className="text-gray-600">
                      Engaging short-form videos optimized for social media
                      platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
            <a href="#">
              <img
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg"
                alt="Video production team filming"
                className="w-full h-auto"
              />
            </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Photography */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/3585088/pexels-photo-3585088.jpeg"
                alt="Professional photographer at work"
                className="w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center justify-center p-3 bg-indigo-100 rounded-lg mb-6">
                <Camera className="h-8 w-8 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Photography
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our photography services capture stunning visuals that elevate
                your brand and create a lasting impression.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Product Photography
                    </h3>
                    <p className="text-gray-600">
                      High-quality product images for e-commerce, catalogs, and
                      marketing materials.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Corporate Portraits
                    </h3>
                    <p className="text-gray-600">
                      Professional headshots and team photos for corporate
                      communications.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Event Photography
                    </h3>
                    <p className="text-gray-600">
                      Comprehensive photo coverage of corporate events and
                      industry conferences.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Architectural Photography
                    </h3>
                    <p className="text-gray-600">
                      Stunning imagery of interior and exterior spaces for real
                      estate and design firms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Writing */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg mb-6">
                <PenTool className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Article Writing
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our expert writers craft engaging content that connects with
                your audience and drives your content marketing strategy.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Blog Posts
                    </h3>
                    <p className="text-gray-600">
                      Well-researched, engaging blog content tailored to your
                      target audience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      SEO Content
                    </h3>
                    <p className="text-gray-600">
                      Keyword-optimized articles designed to improve your search
                      engine rankings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Technical Writing
                    </h3>
                    <p className="text-gray-600">
                      Clear, concise technical documentation and white papers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Press Releases
                    </h3>
                    <p className="text-gray-600">
                      Professional press releases that get your news noticed by
                      media outlets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg"
                alt="Writer working on content"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Content Creation */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center justify-center p-3 bg-purple-100 rounded-lg mb-6">
                <PenTool className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Content creation
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our team create content tailored to our audience
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Social media reels & TikToks
                    </h3>
                    <p className="text-gray-600">blablabla</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      YouTube video production/editing
                    </h3>
                    <p className="text-gray-600">
                      Keyword-optimized articles designed to improve your search
                      engine rankings.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Behind-the-scenes content
                    </h3>
                    <p className="text-gray-600">
                      Clear, concise technical documentation and white papers.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Vlogs or influencer content production
                    </h3>
                    <p className="text-gray-600">
                      Professional press releases that get your news noticed by
                      media outlets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img
                src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg"
                alt="Writer working on content"
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Service Process */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-gray-600">
              We follow a structured approach to ensure every project exceeds
              expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. Consultation
              </h3>
              <p className="text-gray-600">
                We begin with an in-depth consultation to understand your goals,
                audience, and project requirements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                <PenTool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                2. Planning
              </h3>
              <p className="text-gray-600">
                Our team develops a detailed project plan, including timelines,
                deliverables, and creative direction.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                3. Production
              </h3>
              <p className="text-gray-600">
                We execute the project with precision, keeping you informed
                throughout the production process.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                4. Delivery
              </h3>
              <p className="text-gray-600">
                We deliver the final product on time, ensuring it meets our high
                standards and your expectations.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Pricing section could be added here */}

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default ServicePage;
