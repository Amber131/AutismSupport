import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([{
    id: '1',
    role: 'assistant',
    content: 'שלום! אני עזרלי, המומחה הדיגיטלי שלכם. איך אוכל לעזור?',
    timestamp: new Date()
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    // Add user message and typing indicator
    setMessage('');
    setChatHistory(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    // Add temporary typing message
    const typingMessage: Message = {
      id: 'typing',
      role: 'assistant',
      content: '...',
      timestamp: new Date()
    };
    setChatHistory(prev => [...prev, typingMessage]);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...chatHistory, newUserMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Fix: Access the correct path for GPT response
      let assistantResponse = '';
      if (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) {
        assistantResponse = data.choices[0].message.content;
      } else if (data.message) {
        // Fallback for custom response format
        assistantResponse = data.message;
      } else {
        throw new Error('Invalid response format from API');
      }
      
      // Replace typing message with actual response
      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantResponse,
        timestamp: new Date()
      };

      setChatHistory(prev => [...prev.slice(0, -1), newAssistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Replace typing message with error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'מצטער, נתקלתי בבעיה. אנא נסו שוב מאוחר יותר.',
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(isRTL ? 'he-IL' : 'en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`flex flex-col h-[600px] bg-gray-50 rounded-lg shadow-sm ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {chatHistory.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex items-start max-w-[80%] gap-2">
              {msg.role === 'assistant' && (
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Bot className="h-5 w-5 text-blue-500" />
                </div>
              )}
              <div
                className={`rounded-lg p-4 ${
                  msg.role === 'user'
                    ? 'bg-blue-500 text-white'
                    : 'bg-white shadow-sm'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium">
                    {msg.role === 'user' ? (isRTL ? 'את/ה' : 'You') : 'עזרלי'}
                  </span>
                  <span className="text-sm opacity-70">
                    {formatTime(msg.timestamp)}
                  </span>
                </div>
                <p className={msg.role === 'user' ? 'text-white' : 'text-gray-700'}>
                  {msg.content === '...' ? (
                    <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                  ) : (
                    msg.content
                  )}
                </p>
              </div>
              {msg.role === 'user' && (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      
      <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={isRTL ? 'מה היית רוצה לשאול את עזרלי?' : 'What would you like to ask Azarli?'}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            variant="primary"
            disabled={isTyping}
            icon={isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          >
            {isRTL ? 'שלח' : 'Send'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatBot;