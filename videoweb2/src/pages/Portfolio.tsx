import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Container from '../components/ui/Container';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  client: string;
  imageUrl: string;
  description: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: 'Tech Product Launch Campaign',
      category: 'video',
      client: 'NextGen Tech',
      imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
      description: 'A comprehensive video campaign for the launch of NextGen Tech\'s flagship smartphone, including teaser videos, product demonstrations, and lifestyle content for social media.',
      tags: ['Product Launch', 'Tech', 'Social Media']
    },
    {
      id: 2,
      title: 'Luxury Watch Collection',
      category: 'photo',
      client: 'Chrono Elegance',
      imageUrl: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg',
      description: 'A series of high-end product photographs showcasing Chrono Elegance\'s premium watch collection, featuring detailed macro shots and lifestyle imagery.',
      tags: ['Product Photography', 'Luxury', 'E-commerce']
    },
    {
      id: 3,
      title: 'Sustainable Tourism Guide',
      category: 'article',
      client: 'EcoTravel Magazine',
      imageUrl: 'https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg',
      description: 'A comprehensive guide to sustainable tourism practices, featuring interviews with industry experts and practical tips for eco-conscious travelers.',
      tags: ['Travel', 'Sustainability', 'Editorial']
    },
    {
      id: 4,
      title: 'Corporate Brand Documentary',
      category: 'video',
      client: 'Global Innovations Corp',
      imageUrl: 'https://images.pexels.com/photos/3379934/pexels-photo-3379934.jpeg',
      description: 'A 15-minute documentary exploring the history and impact of Global Innovations Corp, featuring interviews with founders, employees, and industry experts.',
      tags: ['Corporate', 'Documentary', 'Branding']
    },
    {
      id: 5,
      title: 'Fashion Lookbook Photography',
      category: 'photo',
      client: 'Urban Style Co.',
      imageUrl: 'https://images.pexels.com/photos/994234/pexels-photo-994234.jpeg',
      description: 'A comprehensive lookbook for Urban Style Co.\'s summer collection, featuring studio and location shoots with professional models.',
      tags: ['Fashion', 'Lookbook', 'Editorial']
    },
    {
      id: 6,
      title: 'Health & Wellness Series',
      category: 'article',
      client: 'Vitality Magazine',
      imageUrl: 'https://images.pexels.com/photos/6787202/pexels-photo-6787202.jpeg',
      description: 'A series of in-depth articles on emerging health and wellness trends, backed by expert interviews and scientific research.',
      tags: ['Health', 'Wellness', 'Research']
    },
    {
      id: 7,
      title: 'Restaurant Promotional Video',
      category: 'video',
      client: 'Flavor Fusion Bistro',
      imageUrl: 'https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg',
      description: 'A mouth-watering promotional video showcasing the culinary expertise and unique dining experience at Flavor Fusion Bistro.',
      tags: ['Food', 'Restaurant', 'Promotional']
    },
    {
      id: 8,
      title: 'Real Estate Photography',
      category: 'photo',
      client: 'Premier Properties',
      imageUrl: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      description: 'Professional interior and exterior photography of luxury residential properties, optimized for real estate listings and marketing materials.',
      tags: ['Real Estate', 'Architecture', 'Interior']
    },
    {
      id: 9,
      title: 'Tech Industry Analysis',
      category: 'article',
      client: 'Digital Frontiers Magazine',
      imageUrl: 'https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg',
      description: 'An in-depth analysis of emerging technology trends, featuring expert insights and market predictions for the coming year.',
      tags: ['Technology', 'Industry Analysis', 'Trends']
    }
  ];

  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setItems(portfolioItems);
      setIsLoading(false);
    }, 800);
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === filter));
    }
  }, [filter, items]);

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="pt-20">
      {/* Portfolio Hero */}
      <div className="relative py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl text-gray-300">
              Explore our collection of work across video production, photography, and article writing.
            </p>
          </div>
        </Container>
      </div>

      {/* Portfolio Filters */}
      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'video', 'photo', 'article'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Work' : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Portfolio Grid */}
      <section className="py-12 bg-gray-50">
        <Container>
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                  onClick={() => openModal(item)}
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full">
                        {item.category}
                      </span>
                      <span className="inline-flex items-center text-gray-500 group-hover:text-blue-600 transition-colors">
                        <ArrowUpRight className="h-5 w-5" />
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">Client: {item.client}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {!isLoading && filteredItems.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-semibold text-gray-700 mb-2">No items found</h3>
              <p className="text-gray-500">Try selecting a different category filter.</p>
            </div>
          )}
        </Container>
      </section>

      {/* Portfolio Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto">
                <img
                  src={selectedItem.imageUrl}
                  alt={selectedItem.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-blue-600 bg-blue-100 rounded-full">
                    {selectedItem.category}
                  </span>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedItem.title}</h2>
                <p className="text-lg text-blue-600 mb-4">Client: {selectedItem.client}</p>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;