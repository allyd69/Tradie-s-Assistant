export interface UserPreferences {
  id?: string;
  name: string;
  trade: string;
  voicePersona: string;
  assistantName: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface Note {
  id?: string;
  content: string;
  createdAt: Date;
}

export interface Reminder {
  id?: string;
  content: string;
  reminderDate: Date;
  completed: boolean;
}
