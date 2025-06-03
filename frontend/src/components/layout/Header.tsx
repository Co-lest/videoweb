import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Video, PenTool } from 'lucide-react';
import Container from '../ui/Container';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'bg-white shadow-md' : 'bg-black/50 backdrop-blur-sm'
      } py-4`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <Camera className="h-6 w-6 text-blue-600" />
              <Video className="h-6 w-6 text-indigo-600" />
              <PenTool className="h-6 w-6 text-purple-600" />
            </div>
            <span className={`font-semibold text-xl ${
              isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'
            }`}>
              Elkay Cinematics
            </span>
          </Link>

          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className={`font-medium transition-colors duration-200 hover:text-blue-600 ${
                      isScrolled ? 'text-gray-900' : 'text-white'
                    }`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={toggleMenu} 
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled || isMenuOpen ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </Container>

      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <Container>
          <ul className="py-4 space-y-2">
            {['Home', 'Services', 'Portfolio', 'About', 'Blog', 'Contact'].map((item) => (
              <li key={item}>
                <Link 
                  to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                  className="block py-2 px-4 text-gray-900 hover:bg-gray-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
};

export default Header;