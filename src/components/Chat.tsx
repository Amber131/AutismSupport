import React, { useState, useRef, useEffect } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: newMessage.trim(),
      timestamp: new Date()
    };

    setNewMessage('');
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    const typingMessage: Message = {
      id: 'typing',
      role: 'assistant',
      content: '...',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, typingMessage]);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(msg => ({
            role: msg.role,
            content: msg.content
          }))
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      console.log('GPT Response:', data);

      const content =
        data.message ||
        data.choices?.[0]?.message?.content ||
        'מצטער, לא הצלחתי להבין. נסה שוב.';

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content,
        timestamp: new Date()
      };

      setMessages(prev => [...prev.slice(0, -1), assistantMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'מצטער, נתקלתי בבעיה. אנא נסו שוב מאוחר יותר.',
        timestamp: new Date()
      };
      setMessages(prev => [...prev.slice(0, -1), errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <Card key={message.id} className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 mr-3">
                {message.role === 'assistant' ? (
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                    <Bot className="h-5 w-5 text-blue-500" />
                  </div>
                ) : (
                  <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
                    <User className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">
                    {message.role === 'assistant' ? 'עזרלי' : 'את/ה'}
                  </span>
                  <span className="text-sm text-gray-500">
                    {format(message.timestamp, 'dd בMMMM, HH:mm', { locale: he })}
                  </span>
                </div>
                <p className="text-gray-700">
                  {message.content === '...' ? (
                    <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                  ) : (
                    message.content
                  )}
                </p>
              </div>
            </div>
          </Card>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t border-gray-200 p-4 bg-white">
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="כתבו הודעה..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isTyping}
          />
          <Button
            type="submit"
            variant="primary"
            disabled={isTyping}
            icon={isTyping ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          >
            שלח
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
