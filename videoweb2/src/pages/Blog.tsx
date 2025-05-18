import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  imageUrl: string;
  readTime: string;
}

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Essential Tips for Better Video Production',
      excerpt: 'Learn the fundamental techniques that can elevate your video production quality, even on a limited budget.',
      category: 'video',
      author: 'Marcus Johnson',
      date: 'June 12, 2023',
      imageUrl: 'https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg',
      readTime: '8 min read'
    },
    {
      id: 2,
      title: 'Lighting Techniques for Product Photography',
      excerpt: 'Discover professional lighting setups that can transform your product photography from amateur to professional.',
      category: 'photography',
      author: 'Sarah Chen',
      date: 'May 28, 2023',
      imageUrl: 'https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg',
      readTime: '6 min read'
    },
    {
      id: 3,
      title: 'How to Write Content That Ranks in Search Engines',
      excerpt: 'Learn the strategies for creating SEO-friendly content that both search engines and readers will love.',
      category: 'writing',
      author: 'Emma Rodriguez',
      date: 'May 15, 2023',
      imageUrl: 'https://images.pexels.com/photos/267569/pexels-photo-267569.jpeg',
      readTime: '10 min read'
    },
    {
      id: 4,
      title: 'The Art of Visual Storytelling in Corporate Videos',
      excerpt: 'Explore how narrative techniques can make your corporate videos more engaging and effective.',
      category: 'video',
      author: 'Alex Morgan',
      date: 'April 30, 2023',
      imageUrl: 'https://images.pexels.com/photos/7345119/pexels-photo-7345119.jpeg',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Composition Rules Every Photographer Should Know',
      excerpt: 'Master the essential composition techniques that will instantly improve your photography.',
      category: 'photography',
      author: 'Sarah Chen',
      date: 'April 18, 2023',
      imageUrl: 'https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg',
      readTime: '9 min read'
    },
    {
      id: 6,
      title: 'Creating Compelling Brand Stories Through Content',
      excerpt: 'Learn how to craft narratives that connect with your audience and strengthen your brand identity.',
      category: 'writing',
      author: 'Emma Rodriguez',
      date: 'April 5, 2023',
      imageUrl: 'https://images.pexels.com/photos/6893939/pexels-photo-6893939.jpeg',
      readTime: '8 min read'
    }
  ];

  const categories = ['all', 'video', 'photography', 'writing'];

  const filteredPosts = blogPosts
    .filter(post => activeCategory === 'all' || post.category === activeCategory)
    .filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="pt-20">
      {/* Blog Hero */}
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

      {/* Search and Filters */}
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

      {/* Blog Posts */}
      <section className="py-12 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium uppercase tracking-wider text-indigo-600 bg-indigo-100 rounded-full">
                      {post.category}
                    </span>
                    <span className="ml-auto text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <User className="h-4 w-4 mr-1" />
                    <span className="mr-4">{post.author}</span>
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
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
        </Container>
      </section>

      {/* Newsletter Signup */}
      {/* <section className="py-16 bg-indigo-600 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-lg text-indigo-100 mb-8">
              Get the latest industry insights, tips, and trends delivered directly to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
                required
              />
              <Button variant="secondary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-indigo-200 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Container>
      </section> */}
    </div>
  );
};

export default Blog;
// no need of a newsletter