import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface PortfolioItem {
  id: number;
  title: string;
  category: 'video' | 'photo' | 'article';
  imageUrl: string;
  description: string;
  client: string;
}

const PortfolioPreview: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [modalItem, setModalItem] = useState<PortfolioItem | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Brand Campaign Video',
      category: 'video',
      imageUrl: 'https://images.pexels.com/photos/3379943/pexels-photo-3379943.jpeg',
      description: 'A commercial campaign for a leading sportswear brand highlighting their new product line.',
      client: 'SportFusion'
    },
    {
      id: 2,
      title: 'Product Showcase Photography',
      category: 'photo',
      imageUrl: 'https://images.pexels.com/photos/3645103/pexels-photo-3645103.jpeg',
      description: 'High-end product photography for a luxury watch collection.',
      client: 'Chrono Elegance'
    },
    {
      id: 3,
      title: 'Tech Industry Analysis',
      category: 'article',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'In-depth analysis of emerging technology trends that gained significant industry attention.',
      client: 'TechInsight Magazine'
    },
    {
      id: 4,
      title: 'Documentary Short Film',
      category: 'video',
      imageUrl: 'https://images.pexels.com/photos/2983472/pexels-photo-2983472.jpeg',
      description: 'An award-winning short documentary exploring urban farming communities.',
      client: 'GreenEarth Foundation'
    },
    {
      id: 5,
      title: 'Corporate Portrait Series',
      category: 'photo',
      imageUrl: 'https://images.pexels.com/photos/2467506/pexels-photo-2467506.jpeg',
      description: 'Executive portrait series for annual report and corporate communications.',
      client: 'Nexus Financial'
    },
    {
      id: 6,
      title: 'Travel Destination Features',
      category: 'article',
      imageUrl: 'https://images.pexels.com/photos/6893089/pexels-photo-6893089.jpeg',
      description: 'Series of travel articles highlighting hidden gems in South America.',
      client: 'Wanderlust Magazine'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const openModal = (item: PortfolioItem) => {
    setModalItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Work</h2>
          <p className="text-xl text-gray-600">
            Browse through a selection of our best projects across video, photography, and written content.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {['all', 'video', 'photo', 'article'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === filter
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-sm uppercase tracking-wider text-blue-300">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">{item.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{item.client}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/portfolio">
            <Button variant="primary" size="lg">
              View Full Portfolio
            </Button>
          </Link>
        </div>
      </Container>

      {/* Modal */}
      {modalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              onClick={closeModal}
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-auto">
                <img 
                  src={modalItem.imageUrl} 
                  alt={modalItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full mb-3">
                  {modalItem.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900">{modalItem.title}</h3>
                <p className="text-lg text-blue-600 mb-4">Client: {modalItem.client}</p>
                <p className="text-gray-600 mb-6">{modalItem.description}</p>
                <Link to="/portfolio">
                  <Button variant="outline">
                    View Similar Projects
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioPreview;