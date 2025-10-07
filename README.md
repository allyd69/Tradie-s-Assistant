# Tradie-s-Assistant

A voice-enabled AI assistant for tradies. Your digital mate that’s always on hand to help manage tasks, appointments, and daily briefings.

---

Table of Contents

1. Project Overview

2. Features

3. Tech Stack

4. Setup & Installation

5. Usage

6. Project Structure

7. Roadmap

8. Contributing

9. License

---

Project Overview

Tradie-s-Assistant is a web application designed to help tradies streamline their daily work life. Users can interact with a friendly AI assistant via voice or chat to:

Get daily briefings tailored to their tasks.

Manage appointments and reminders.

Keep track of project files and notes.

Receive personalized AI advice based on uploaded data.

The assistant is fully customizable — tradies can pick its voice style, personality, and what they want it to call them.

---

Features

Voice Interaction: Speak commands and receive voice responses.

Chat Interface: Type or speak to the assistant for help.

Personalization: Set up assistant name, voice, and trade-specific preferences.

File Memory: Upload files/data for AI to reference daily.

Daily Briefings: “Morning, [Name]” triggers a daily summary.

Custom Commands: Automate recurring tasks and reminders.


---

Tech Stack

Frontend: TypeScript, Vite, Tailwind CSS

AI & Voice: [Placeholder — your AI backend, e.g., OpenAI API, Web Speech API]

Build Tools: Vite, PostCSS

Linting: ESLint


---

Setup & Installation

1. Clone the repository


git clone https://github.com/allyd69/Tradie-s-Assistant.git
cd Tradie-s-Assistant

2. Install dependencies


npm install

3. Run the development server


npm run dev

Open http://localhost:5173 to view the app in your browser.

4. Build for production


npm run build


---

Usage

Complete the initial setup to personalize your assistant.

Use the chat interface or microphone button to interact.

Upload project files to let the AI reference them for briefings and advice.

Say “Morning, [Assistant Name]” for your daily briefing.


---

Project Structure

Tradie-s-Assistant/
├─ src/                # Source code (components, pages, AI logic)
├─ index.html          # Main HTML file
├─ package.json        # Project dependencies and scripts
├─ vite.config.ts      # Vite configuration
├─ tailwind.config.js  # Tailwind CSS setup
├─ postcss.config.js   # PostCSS setup
├─ tsconfig.json       # TypeScript configuration
├─ .eslintconfig.js    # ESLint configuration
├─ README.md           # Project documentation
└─ .bolt               # AI workflow configuration (if using Bolt AI)


---

Roadmap

[ ] Integrate OpenAI API for AI responses

[ ] Implement full voice input/output using Web Speech API

[ ] Daily briefings automation

[ ] File upload memory feature

[ ] Customizable assistant personality & voice

[ ] Mobile responsiveness & PWA support


---

Contributing

We welcome contributions!

1. Fork the repo


2. Create a feature branch (git checkout -b feature-name)


3. Commit your changes (git commit -m 'Add feature')


4. Push to the branch (git push origin feature-name)


5. Open a Pull Request


---

License

MIT

