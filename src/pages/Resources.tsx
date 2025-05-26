import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ResourceCard from '../components/ResourceCard';
import { resources, resourceTags } from '../data/resources';
import { Button } from '../components/ui/Button';
import { BookOpen, Filter, X } from 'lucide-react';

const Resources: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const toggleTag = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter(t => t !== tag));
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };
  
  const clearFilters = () => {
    setSelectedTags([]);
    setSearchTerm('');
  };
  
  const filteredResources = resources.filter(resource => {
    // Filter by tags
    const matchesTags = selectedTags.length === 0 || 
      resource.tags.some(tag => selectedTags.includes(tag));
    
    // Filter by search term
    const matchesSearch = searchTerm === '' || 
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesTags && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-blue-50 to-white py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-800">
                משאבים ומידע
              </h1>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl">
              כאן תמצאו מאגר מידע מקיף של ארגונים, שירותים, וכלים שיכולים לסייע לכם ולילדכם במסע.
            </p>
          </div>
        </section>
        
        {/* Filter Section */}
        <section className="py-8 px-4 bg-white border-b border-gray-200">
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="w-full md:w-1/3">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="חיפוש משאבים..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <div className="absolute left-3 top-3 text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Filter className="h-5 w-5 text-gray-500 mr-2" />
                <span className="text-gray-700 font-medium">סינון לפי:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {selectedTags.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    className="border border-gray-200"
                    onClick={clearFilters}
                    icon={<X className="h-4 w-4" />}
                  >
                    נקה הכל
                  </Button>
                )}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-2">
              {resourceTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                    selectedTags.includes(tag)
                      ? 'bg-blue-100 text-blue-800 border-blue-200 border'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-500 mt-2">
              מציג {filteredResources.length} מתוך {resources.length} משאבים
            </div>
          </div>
        </section>
        
        {/* Resources List */}
        <section className="py-12 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            {filteredResources.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium text-gray-700 mb-2">לא נמצאו תוצאות</h3>
                <p className="text-gray-500">נסו לשנות את מונחי החיפוש או להסיר חלק מהמסננים</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={clearFilters}
                >
                  נקה מסננים
                </Button>
              </div>
            )}
          </div>
        </section>
        
        {/* Submit Resource CTA */}
        <section className="py-12 px-4 bg-white border-t border-gray-200">
          <div className="container mx-auto max-w-6xl text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              מכירים משאב שחסר כאן?
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              עזרו לנו לבנות את המאגר המקיף ביותר של משאבים עבור משפחות המתמודדות עם אוטיזם בישראל.
            </p>
            <Button 
              variant="primary"
            >
              הציעו משאב חדש
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;