import { useState } from 'react';
import { UserPreferences } from '../types';

interface SetupFlowProps {
  onComplete: (prefs: UserPreferences) => void;
}

export const SetupFlow = ({ onComplete }: SetupFlowProps) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [trade, setTrade] = useState('');
  const [voicePersona, setVoicePersona] = useState('Friendly Aussie');
  const [assistantName, setAssistantName] = useState('Wombat');

  const handleSubmit = () => {
    onComplete({
      name,
      trade,
      voicePersona,
      assistantName
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1F3A93] to-[#2c4db5] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full">
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-[#F79F1F] rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-4xl">🦘</span>
          </div>
          <h1 className="text-3xl font-bold text-[#1F3A93] mb-2">Wombat Assistant</h1>
          <p className="text-gray-600">Your Mate Who Knows Your Day Better Than You</p>
        </div>

        {step === 1 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's your name?
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F79F1F] focus:border-transparent outline-none"
                placeholder="e.g., Mick"
              />
            </div>
            <button
              onClick={() => name && setStep(2)}
              disabled={!name}
              className="w-full bg-[#F79F1F] text-white py-3 rounded-lg font-medium hover:bg-[#e89010] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              Next
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What's your trade?
              </label>
              <input
                type="text"
                value={trade}
                onChange={(e) => setTrade(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F79F1F] focus:border-transparent outline-none"
                placeholder="e.g., Builder, Plumber, Sparky"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(1)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={() => trade && setStep(3)}
                disabled={!trade}
                className="flex-1 bg-[#F79F1F] text-white py-3 rounded-lg font-medium hover:bg-[#e89010] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What should your assistant sound like?
              </label>
              <select
                value={voicePersona}
                onChange={(e) => setVoicePersona(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F79F1F] focus:border-transparent outline-none"
              >
                <option value="Friendly Aussie">Friendly Aussie</option>
                <option value="Professional">Professional</option>
                <option value="Female Admin">Female Admin</option>
                <option value="After-Hours Polite">After-Hours Polite</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                What do you want to call your assistant?
              </label>
              <input
                type="text"
                value={assistantName}
                onChange={(e) => setAssistantName(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F79F1F] focus:border-transparent outline-none"
                placeholder="e.g., Wombat, Charlie, Sam"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setStep(2)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="flex-1 bg-[#F79F1F] text-white py-3 rounded-lg font-medium hover:bg-[#e89010] transition-colors"
              >
                Let's Go!
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
