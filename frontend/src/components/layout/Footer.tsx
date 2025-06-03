import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Video, PenTool, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Camera className="h-5 w-5 text-blue-400" />
                <Video className="h-5 w-5 text-indigo-400" />
                <PenTool className="h-5 w-5 text-purple-400" />
              </div>
              <span className="font-semibold text-xl text-white">Elkay Cinematics</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              We transform ideas into compelling visual and written content for businesses and individuals.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Video Production</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Photography</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Article Writing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Content Strategy</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Brand Storytelling</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                <span>Kesses<br/>Kenya, Uasin Gishu</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-400" />
                <span>(+254)768 182978</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <span></span>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800 text-sm text-center md:flex md:justify-between">
          <p>© {new Date().getFullYear()} Elkay. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;