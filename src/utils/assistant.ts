import type { UserPreferences } from '../types';

export const generateDailyBriefing = (prefs: UserPreferences): string => {
  const greetings = [
    `Morning, ${prefs.name}!`,
    `G'day, ${prefs.name}!`,
    `Hey there, ${prefs.name}!`,
    `Good morning, mate!`
  ];

  const jobExamples = [
    "You've got two jobs today — a kitchen reno at 9am and a bathroom fix at 2pm.",
    "Three jobs lined up: bathroom tiles at 8, deck repair at 11, and a quote meeting at 3.",
    "Light day today — just one install at 10am, then you're clear.",
    "Busy one today! Four jobs: morning fix at 7, two mid-day installs, and an evening consult."
  ];

  const weatherNotes = [
    "Weather looks good, no rain expected.",
    "Bit of cloud cover but should stay dry.",
    "Beautiful day ahead, perfect for outdoor work.",
    "Light showers possible this arvo, might wanna bring a tarp."
  ];

  const extras = [
    "You've got one unpaid invoice from the Johnsons — I'll remind you later.",
    "Materials for the Wilson job arrived yesterday, they're in the ute.",
    "Don't forget to pick up those hinges from Bunnings.",
    "Council inspection scheduled for Thursday, all good to go.",
    ""
  ];

  const greeting = greetings[Math.floor(Math.random() * greetings.length)];
  const jobs = jobExamples[Math.floor(Math.random() * jobExamples.length)];
  const weather = weatherNotes[Math.floor(Math.random() * weatherNotes.length)];
  const extra = extras[Math.floor(Math.random() * extras.length)];

  return `${greeting} ${jobs} ${weather}${extra ? ' ' + extra : ''}`;
};

export const generateAssistantResponse = (
  input: string,
  prefs: UserPreferences
): string => {
  const lowerInput = input.toLowerCase();

  if (lowerInput.includes('morning') || lowerInput.includes('g\'day')) {
    return generateDailyBriefing(prefs);
  }

  if (lowerInput.includes('what') && (lowerInput.includes('today') || lowerInput.includes('on'))) {
    return generateDailyBriefing(prefs);
  }

  if (lowerInput.includes('add') && lowerInput.includes('note')) {
    return "Sure thing! What's the note?";
  }

  if (lowerInput.includes('remind')) {
    return "No worries, I'll set that reminder. What should I remind you about?";
  }

  if (lowerInput.includes('send') && lowerInput.includes('message')) {
    return "Got it. Who are we messaging and what do you want to say?";
  }

  if (lowerInput.includes('thanks') || lowerInput.includes('thank you')) {
    return "No worries, mate! Always here to help.";
  }

  if (lowerInput.includes('help')) {
    return "I can help you with daily briefings, adding notes, setting reminders, and keeping track of your jobs. Just ask away!";
  }

  const responses = [
    "I'm on it, mate. What else can I help with?",
    "Got it! Anything else you need?",
    "No worries, I'll sort that out.",
    "Consider it done! What's next?",
    "Right-o, I've made a note of that."
  ];

  return responses[Math.floor(Math.random() * responses.length)];
};
