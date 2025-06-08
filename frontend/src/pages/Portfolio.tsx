import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Container from '../components/ui/Container';

interface PortfolioItem {
  _id: number;
  title: string;
  category: string;
  link: string; 
  thumbnailUrl: string;
  description: string;
  client?: string;
  tags?: string[];
}

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorDisplay, setErrorDisplay] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setErrorDisplay(null);
        setIsLoading(true);   

        let response = await fetch("https://videoweb-eight.vercel.app/");

        if (!response.ok) {
          const errorText = await response.text(); 
          throw new Error(`HTTP error! Status: ${response.status} - ${errorText || response.statusText}`);
        }

        let result: { data: PortfolioItem[] } = await response.json();
        setItems(result.data);
      } catch (error: any) {
        console.error("Failed to fetch portfolio items:", error);
        setErrorDisplay(`Failed to load portfolio: ${error.message || "An unknown error occurred."}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
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

      <section className="py-12 bg-gray-50">
        <Container>

          {errorDisplay && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-8" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline ml-2">{errorDisplay}</span>
            </div>
          )}

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <> 
              {filteredItems.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredItems.map((item, index) => (
                    <div
                      key={item._id || index}
                      className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all cursor-pointer"
                      onClick={() => openModal(item)}
                    >
                      <div className="h-64 overflow-hidden">
                        <img
                          src={item.thumbnailUrl}
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
                        <p className="text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">No items found</h3>
                  <p className="text-gray-500">Try selecting a different category filter or check your network connection.</p>
                </div>
              )}
            </>
          )}
        </Container>
      </section>

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
                  src={selectedItem.thumbnailUrl}
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
                {selectedItem.client && (
                  <p className="text-lg text-blue-600 mb-4">Client: {selectedItem.client}</p>
                )}
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                {selectedItem.tags && selectedItem.tags.length > 0 && (
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
                )}
                {selectedItem.link && (
                  <a
                    href={selectedItem.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
                  >
                    View Project <ArrowUpRight className="ml-2 h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;