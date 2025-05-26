import React from 'react';
import { Card } from './ui/Card';
import { Link } from './ui/Link';
import { ExternalLink, Phone, MapPin } from 'lucide-react';

export interface ResourceType {
  id: string;
  title: string;
  description: string;
  type: 'organization' | 'article' | 'video' | 'service' | 'tool';
  contact?: {
    phone?: string;
    email?: string;
    address?: string;
    website?: string;
  };
  tags: string[];
  language: 'hebrew' | 'english' | 'arabic' | 'russian' | 'multiple';
}

interface ResourceCardProps {
  resource: ResourceType;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => {
  const tagColors: Record<string, string> = {
    'קופות חולים': 'bg-blue-100 text-blue-800',
    'ביטוח לאומי': 'bg-green-100 text-green-800',
    'עמותות': 'bg-purple-100 text-purple-800',
    'טיפול': 'bg-orange-100 text-orange-800',
    'אבחון': 'bg-red-100 text-red-800',
    'זכויות': 'bg-teal-100 text-teal-800',
    'חינוך': 'bg-indigo-100 text-indigo-800',
    'תמיכה רגשית': 'bg-pink-100 text-pink-800',
    'default': 'bg-gray-100 text-gray-800'
  };

  const getTagColor = (tag: string) => {
    return tagColors[tag] || tagColors.default;
  };

  const typeIcons = {
    organization: <MapPin className="h-5 w-5 text-blue-500" />,
    article: <ExternalLink className="h-5 w-5 text-green-500" />,
    video: <ExternalLink className="h-5 w-5 text-red-500" />,
    service: <Phone className="h-5 w-5 text-purple-500" />,
    tool: <ExternalLink className="h-5 w-5 text-orange-500" />
  };

  return (
    <Card className="h-full flex flex-col">
      <div className="p-5">
        <div className="flex items-start">
          <div className="mr-3 mt-0.5">
            {typeIcons[resource.type]}
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900">{resource.title}</h3>
            <p className="mt-2 text-gray-600">{resource.description}</p>
          </div>
        </div>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {resource.tags.map((tag, index) => (
            <span 
              key={index} 
              className={`${getTagColor(tag)} px-2.5 py-0.5 rounded-full text-xs font-medium`}
            >
              {tag}
            </span>
          ))}
        </div>
        
        {resource.contact && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            {resource.contact.website && (
              <div className="flex items-center mt-2">
                <ExternalLink className="h-4 w-4 text-gray-500 mr-2" />
                <Link 
                  href={resource.contact.website} 
                  className="text-blue-500 hover:underline"
                  external
                >
                  לאתר הרשמי
                </Link>
              </div>
            )}
            
            {resource.contact.phone && (
              <div className="flex items-center mt-2">
                <Phone className="h-4 w-4 text-gray-500 mr-2" />
                <Link 
                  href={`tel:${resource.contact.phone}`} 
                  className="text-gray-600"
                >
                  {resource.contact.phone}
                </Link>
              </div>
            )}
            
            {resource.contact.address && (
              <div className="flex items-center mt-2">
                <MapPin className="h-4 w-4 text-gray-500 mr-2" />
                <span className="text-gray-600">{resource.contact.address}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default ResourceCard;