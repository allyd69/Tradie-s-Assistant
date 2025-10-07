import { useState, useEffect } from 'react';
import { SetupFlow } from './components/SetupFlow';
import { ChatInterface } from './components/ChatInterface';
import { UserPreferences } from './types';

function App() {
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedPrefs = localStorage.getItem('wombat_preferences');
    if (savedPrefs) {
      setPreferences(JSON.parse(savedPrefs));
    }
    setLoading(false);
  }, []);

  const handleSetupComplete = (prefs: UserPreferences) => {
    localStorage.setItem('wombat_preferences', JSON.stringify(prefs));
    setPreferences(prefs);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#1F3A93] to-[#2c4db5] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!preferences) {
    return <SetupFlow onComplete={handleSetupComplete} />;
  }

  return <ChatInterface preferences={preferences} />;
}

export default App;
