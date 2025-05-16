import React from "react";
import { Link } from "react-router-dom";
import { Users, FileText, Image, Settings } from "lucide-react";
import Container from "../../components/ui/Container";

const Dashboard: React.FC = () => {
    return(
        <div className="min-h-screen bg-gray-50 pt-20">
        <Container>
          <div className="py-8">
            <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Link to="/admin/testimonials" className="block">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Users className="h-8 w-8 text-blue-600 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900">Testimonials</h2>
                  <p className="text-gray-600 mt-2">Manage client reviews and testimonials</p>
                </div>
              </Link>
  
              <Link to="/admin/pages" className="block">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <FileText className="h-8 w-8 text-indigo-600 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900">Pages</h2>
                  <p className="text-gray-600 mt-2">Edit website page content</p>
                </div>
              </Link>
  
              <Link to="/admin/portfolio" className="block">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Image className="h-8 w-8 text-purple-600 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900">Portfolio</h2>
                  <p className="text-gray-600 mt-2">Manage portfolio items</p>
                </div>
              </Link>
  
              <Link to="/admin/settings" className="block">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <Settings className="h-8 w-8 text-gray-600 mb-4" />
                  <h2 className="text-xl font-semibold text-gray-900">Settings</h2>
                  <p className="text-gray-600 mt-2">Configure website settings</p>
                </div>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    );
};

export default Dashboard;
