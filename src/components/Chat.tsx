import React, { useState, useEffect, useRef } from 'react';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';
import { Send } from 'lucide-react';
import { Button } from './ui/Button';
import { Card } from './ui/Card';

interface Message {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
  userEmail: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [loading, setLoading] = useState(false);
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

    setLoading(true);
    
    const message: Message = {
      id: Math.random().toString(36).substr(2, 9),
      userId: 'current-user',
      content: newMessage.trim(),
      createdAt: new Date().toISOString(),
      userEmail: 'user@example.com'
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <Card key={message.id} className="p-4">
            <div className="flex items-start">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-800">{message.userEmail}</span>
                  <span className="text-sm text-gray-500">
                    {format(new Date(message.createdAt), 'dd בMMMM, HH:mm', { locale: he })}
                  </span>
                </div>
                <p className="text-gray-700">{message.content}</p>
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
          />
          <Button
            type="submit"
            variant="primary"
            disabled={loading}
            icon={<Send className="h-5 w-5" />}
          >
            שלח
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Chat;