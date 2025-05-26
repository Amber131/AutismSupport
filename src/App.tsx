import React, { useState } from 'react';
import Home from './pages/Home';
import Resources from './pages/Resources';
import RightsAndBenefits from './pages/RightsAndBenefits';
import BehaviorTools from './pages/BehaviorTools';
import Community from './pages/Community';

function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Simple routing logic
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'resources':
        return <Resources />;
      case 'rights':
        return <RightsAndBenefits />;
      case 'tools':
        return <BehaviorTools />;
      case 'community':
        return <Community />;
      default:
        return <Home />;
    }
  };

  // Override default link behavior for in-app navigation
  React.useEffect(() => {
    const handleNavigation = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.getAttribute('href')?.startsWith('/')) {
        event.preventDefault();
        const path = anchor.getAttribute('href') || '/';
        
        // Simple routing based on path
        if (path === '/') setCurrentPage('home');
        else if (path === '/resources') setCurrentPage('resources');
        else if (path === '/rights') setCurrentPage('rights');
        else if (path === '/tools') setCurrentPage('tools');
        else if (path === '/community') setCurrentPage('community');
      }
    };

    document.addEventListener('click', handleNavigation);
    return () => document.removeEventListener('click', handleNavigation);
  }, []);

  return (
    <div dir="rtl" className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default App;