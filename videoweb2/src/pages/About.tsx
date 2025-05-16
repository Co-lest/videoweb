import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';
import Container from '../components/ui/Container';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const About: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      name: 'Alex Morgan',
      role: 'Creative Director',
      bio: 'With over 15 years of experience in visual storytelling, Alex leads our creative team with a passion for innovative content that drives results.',
      imageUrl: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    {
      name: 'Sarah Chen',
      role: 'Lead Photographer',
      bio: 'Sarah\'s award-winning photography has been featured in major publications. She specializes in commercial and editorial photography.',
      imageUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg'
    },
    {
      name: 'Marcus Johnson',
      role: 'Video Production Manager',
      bio: 'Marcus brings his cinematic vision to our video projects, with extensive experience in commercial and documentary filmmaking.',
      imageUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Senior Content Writer',
      bio: 'Emma crafts compelling narratives that engage audiences. Her background in journalism brings depth and authority to our written content.',
      imageUrl: 'https://images.pexels.com/photos/732425/pexels-photo-732425.jpeg'
    }
  ];

  return (
    <div className="pt-20">
      {/* About Hero */}
      <div className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About CreativeStudio</h1>
            <p className="text-xl text-gray-300">
              We are a team of passionate creatives dedicated to helping brands tell their stories.
            </p>
          </div>
        </Container>
      </div>

      {/* Our Story */}
      <section className="py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015, CreativeStudio began with a simple mission: to help brands communicate effectively through powerful visual and written content. What started as a small team of passionate creatives has grown into a full-service content production agency serving clients across industries.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that great content starts with understanding your audience and your goals. That's why we take a strategic approach to every project, ensuring that our work not only looks and sounds great but also delivers results.
              </p>
              <p className="text-lg text-gray-600">
                Today, our team of photographers, videographers, writers, and strategists works together to create integrated content that helps our clients stand out in a crowded digital landscape.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
                alt="Creative team collaboration" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              These core principles guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-600 mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                We strive for excellence in every project, from concept to delivery. Quality is never compromised.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork. We collaborate closely with our clients and each other.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-purple-100 text-purple-600 mb-6">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Results</h3>
              <p className="text-gray-600">
                We're focused on creating content that not only looks great but also achieves your business objectives.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-6">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on time, every time. You can count on us to meet deadlines without sacrificing quality.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Meet the Team */}
      <section className="py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">
              The talented individuals behind our creative solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-blue-600 text-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">350+</div>
              <p className="text-xl text-blue-100">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">98%</div>
              <p className="text-xl text-blue-100">Client Satisfaction</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">15</div>
              <p className="text-xl text-blue-100">Industry Awards</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">8</div>
              <p className="text-xl text-blue-100">Years of Experience</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Clients */}
      <section className="py-24 bg-gray-50">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted By</h2>
            <p className="text-xl text-gray-600">
              We're proud to work with these amazing brands.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {/* These would typically be client logos */}
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-12 w-full flex items-center justify-center">
                <div className="bg-gray-300 h-6 w-32 rounded"></div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;