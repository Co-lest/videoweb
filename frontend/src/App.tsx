import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Dashboard from './pages/admin/Dashboard';
import TestimonialsManager from './pages/admin/TestimonialsManager';
import PortfolioManager from './pages/admin/PortfolioManager';
import TermsOfService from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';


function App() {
  
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/admin/testimonials" element={<TestimonialsManager />} />
            <Route path="/admin/portfolio" element={<PortfolioManager />} />
            <Route path='/terms' element={<TermsOfService/>} />
            <Route path='/privacy' element={<PrivacyPolicy/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;