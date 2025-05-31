import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LogOut } from 'lucide-react';
import textlogo from '../../public/logo.png'
import Logo from '../../public/favi.png'

const Navbar: React.FC = () => {
  const { isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-md py-2 px-6 fixed left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-2xl">
              <img src={Logo} alt='J'/>
              
            </div>
            <div className="ml-2">
              <img src={textlogo} className='h-[25px] w-[100px]'/>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-black hover:text-blue-600 transition-colors">Home</Link>
          <Link to="/about" className="text-black hover:text-blue-600 transition-colors">About Us</Link>
          <Link to="/work" className="text-black hover:text-blue-600 transition-colors">Our Work</Link>
          {isAdmin && (
            <Link to="/admin" className="text-black hover:text-blue-600 transition-colors">Analytics Dashboard</Link>
          )}
          <Link to="/media" className="text-black hover:text-blue-600 transition-colors">Media</Link>
        </div>
        
        <div className="flex items-center space-x-4">
          {isAuthenticated ? (
            <button 
              onClick={handleLogout}
              className="flex items-center text-red-600 hover:text-red-800 transition-colors"
            >
              <LogOut size={18} className="mr-1" />
              <span>Logout</span>
            </button>
          ) : (
            <Link 
              to="/login" 
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;