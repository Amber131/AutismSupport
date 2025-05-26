import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Chat from '../components/Chat';
import Auth from '../components/Auth';

const Community: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        {!isAuthenticated ? (
          <Auth onAuthSuccess={handleAuthSuccess} />
        ) : (
          <Chat />
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Community;