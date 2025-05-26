import React, { useState, useRef, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card } from '../components/ui/Card';
import { MessageCircle, Send, Bot, User, Loader2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
}

const Help: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Message[]>([{
    id: '1',
    role: 'assistant',
    content: 'שלום! אני כאן כדי לעזור לך בכל שאלה או התלבטות. במה אוכל לסייע?',
    timestamp: new Date()
  }]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'he';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatHistory]);

  const generateResponse = async (userMessage: string): Promise<string> => {
    // Simulate AI response based on user input
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate thinking time

    const responses = {
      default: 'אני מבין את החשש שלך. אשמח לעזור ולכוון אותך בנושא זה. האם תוכל לספר לי עוד על המצב?',
      greetings: ['שלום', 'היי', 'בוקר טוב', 'ערב טוב'].some(g => userMessage.includes(g)) ?
        'שלום! איך אוכל לעזור לך היום?' : null,
      diagnosis: userMessage.includes('אבחון') ?
        'תהליך האבחון יכול להיות מאתגר. חשוב לדעת שיש מספר מרכזים מוכרים לאבחון. האם תרצה לשמוע על האפשרויות העומדות בפניך?' : null,
      rights: userMessage.includes('זכויות') ?
        'ישנן זכויות רבות המגיעות למשפחות. אשמח לפרט על הזכויות העיקריות ולכוון אותך לגורמים הרלוונטיים. במה תרצה להתמקד?' : null,
      support: userMessage.includes('תמיכה') ?
        'תמיכה רגשית היא חלק חשוב מההתמודדות. יש לנו קהילה תומכת וגם אנשי מקצוע שיכולים לסייע. האם תרצה לשמוע עוד על אפשרויות התמיכה?' : null
    };

    return responses.greetings || responses.diagnosis || responses.rights || responses.support || responses.default;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage = message;
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: userMessage,
      timestamp: new Date()
    };

    setMessage('');
    setChatHistory(prev => [...prev, newUserMessage]);
    setIsTyping(true);

    try {
      const response = await generateResponse(userMessage);
      const newAssistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setChatHistory(prev => [...prev, newAssistantMessage]);
    } catch (error) {
      console.error('Error generating response:', error);
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
    <div className={`min-h-screen flex flex-col ${isRTL ? 'rtl' : 'ltr'}`}>
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      
      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-b from-blue-50 to-white py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Bot className="h-8 w-8 text-blue-500 mr-2" />
                <h1 className="text-3xl font-bold text-gray-800">
                  {isRTL ? 'איך נוכל לעזור?' : 'How can we help?'}
                </h1>
              </div>
              <p className="text-xl text-gray-600">
                {isRTL 
                  ? 'שוחחו עם המומחה הדיגיטלי שלנו וקבלו מענה מיידי לשאלות שלכם'
                  : 'Chat with our digital expert and get immediate answers to your questions'}
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <Card className="min-h-[600px] flex flex-col bg-gray-50">
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
                            {msg.role === 'user' ? (isRTL ? 'את/ה' : 'You') : 'AzarLaLev'}
                          </span>
                          <span className="text-sm opacity-70">
                            {formatTime(msg.timestamp)}
                          </span>
                        </div>
                        <p className={msg.role === 'user' ? 'text-white' : 'text-gray-700'}>
                          {msg.content}
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
                {isTyping && (
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bot className="h-5 w-5 text-blue-500" />
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <Loader2 className="h-5 w-5 animate-spin text-blue-500" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              
              <div className="border-t border-gray-200 p-4 bg-white rounded-b-lg">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={isRTL ? 'הקלידו את השאלה שלכם...' : 'Type your question...'}
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
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Help;