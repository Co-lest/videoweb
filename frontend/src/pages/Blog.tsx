import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { Search } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

interface BlogPost {
  _id: string;
  id: number;
  title: string;
  category: string;
  description: string;
  thumbnailUrl: string;
  link: string;
  createdAt: Date;
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://elkay-backend.onrender.com/portfolio");

        if (!response.ok) {
          throw new Error("Failed to fetch posts. Please check your connection.");
        }
        const data = await response.json();
        const articles = data.data.filter((post: BlogPost) => post.category === 'article');
        setAllPosts(articles);

      } catch (error) {
        setErrorMessage("An error occurred while fetching blog items.");
      } finally {
        setLoadingBlog(false);
      }
    })();
  }, []);

  const categories = ['all', 'video', 'photography', 'article'];

  const filteredPosts = allPosts
    .filter(post => activeCategory === 'all' || post.category.toLowerCase() === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="pt-20">
      <div className="relative py-24 bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Blog</h1>
            <p className="text-xl text-indigo-100">
              Insights, tips, and trends in video production, photography, and content writing.
            </p>
          </div>
        </Container>
      </div>
      <section className="py-12 bg-white">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-72 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === 'all' ? 'All Posts' : category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12 bg-gray-50">
        <Container>
          {loadingBlog && <p className="text-center">Loading posts...</p>}
          {errorMessage && <p className="text-center text-red-500">{errorMessage}</p>}
          
          {!loadingBlog && !errorMessage && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article key={post._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <Link to={post.link} target="_blank" rel="noopener noreferrer">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={post.thumbnailUrl}
                          alt={post.title} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-100 rounded-full">
                            {post.category}
                          </span>
                        </div>
                        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.description}</p>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                  <h3 className="text-2xl font-semibold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-gray-500 mb-6">Try a different search term or category.</p>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}

              {filteredPosts.length > 0 && (
                <div className="text-center mt-12">
                  <Button variant="primary">
                    Load More Articles
                  </Button>
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </div>
  );
};

export default Blog;