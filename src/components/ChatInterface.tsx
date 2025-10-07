import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Send, Upload, StickyNote, Bell } from 'lucide-react';
import { Message, UserPreferences } from '../types';
import { useVoice } from '../hooks/useVoice';
import { generateAssistantResponse } from '../utils/assistant';

interface ChatInterfaceProps {
  preferences: UserPreferences;
}

export const ChatInterface = ({ preferences }: ChatInterfaceProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const { isListening, transcript, startListening, stopListening, speak, isSupported } = useVoice();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showActions, setShowActions] = useState(false);

  useEffect(() => {
    const welcomeMessage: Message = {
      id: '1',
      role: 'assistant',
      content: `G'day ${preferences.name}! I'm ${preferences.assistantName}, your AI mate. Say "Morning ${preferences.assistantName}" or tap the mic to get started!`,
      timestamp: new Date()
    };
    setMessages([welcomeMessage]);
    speak(welcomeMessage.content);
  }, []);

  useEffect(() => {
    if (transcript) {
      handleSendMessage(transcript);
    }
  }, [transcript]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const response = generateAssistantResponse(text, preferences);
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: response,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, assistantMessage]);
      speak(response);
    }, 500);
  };

  const handleMicClick = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const handleQuickAction = (action: string) => {
    handleSendMessage(action);
    setShowActions(false);
  };

  return (
    <div className="min-h-screen bg-[#F5F6FA] flex flex-col">
      <header className="bg-gradient-to-r from-[#1F3A93] to-[#2c4db5] text-white p-4 shadow-lg">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#F79F1F] rounded-full flex items-center justify-center">
              <span className="text-2xl">🦘</span>
            </div>
            <div>
              <h1 className="text-xl font-bold">{preferences.assistantName}</h1>
              <p className="text-sm text-blue-200">Wombat's Got Ya Back</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium">{preferences.name}</p>
            <p className="text-xs text-blue-200">{preferences.trade}</p>
          </div>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-4 max-w-4xl mx-auto w-full">
        <div className="space-y-4 pb-32">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-[#F79F1F] text-white'
                    : 'bg-white text-gray-800 shadow-md'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
                <span className="text-xs opacity-70 mt-1 block">
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="max-w-4xl mx-auto">
          {showActions && (
            <div className="mb-3 flex gap-2 flex-wrap">
              <button
                onClick={() => handleQuickAction('Add a note')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
              >
                <StickyNote size={16} />
                Add Note
              </button>
              <button
                onClick={() => handleQuickAction('Remind me tomorrow')}
                className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors"
              >
                <Bell size={16} />
                Remind Me
              </button>
              <button
                onClick={() => alert('File upload coming soon!')}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                <Upload size={16} />
                Upload File
              </button>
            </div>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowActions(!showActions)}
              className="p-3 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
            >
              <StickyNote size={20} />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage(input)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:ring-2 focus:ring-[#F79F1F] focus:border-transparent outline-none"
            />

            <button
              onClick={() => handleSendMessage(input)}
              disabled={!input.trim()}
              className="p-3 bg-[#F79F1F] text-white rounded-full hover:bg-[#e89010] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              <Send size={20} />
            </button>

            {isSupported && (
              <button
                onClick={handleMicClick}
                className={`p-4 rounded-full transition-all ${
                  isListening
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-[#1F3A93] text-white hover:bg-[#2c4db5]'
                }`}
              >
                {isListening ? <MicOff size={24} /> : <Mic size={24} />}
              </button>
            )}
          </div>

          <p className="text-center text-xs text-gray-500 mt-2">
            {isListening ? 'Listening...' : 'Tap the mic or type to chat'}
          </p>
        </div>
      </div>

      <div className="fixed bottom-24 right-4 text-xs text-gray-400 bg-white px-3 py-1 rounded-full shadow-md">
        Coming Soon: Mobile App
      </div>
    </div>
  );
};
