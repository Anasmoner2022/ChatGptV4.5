# AstraMind AI - Project Documentation

## Project Overview
This project aims to create a clone of "Gemini AI" as a portfolio piece to showcase proficiency in using AI APIs and modern web development tools. The application will be built using **React** for the frontend, **Appwrite** as the backend service, and various npm packages for enhanced functionality. Unique features will be added to distinguish this clone from the original application.

---

## Key Features
1. **AI Integration**: Connect to an AI API (e.g., OpenAI, Hugging Face, or similar).
2. **Authentication**: User login and registration via Appwrite.
3. **User Dashboard**: Personalized interface to interact with AI services.
4. **Unique Feature**: Real-time collaboration on AI outputs (e.g., document editing, chat, etc.).
5. **History Management**: Store and retrieve user interactions with AI.
6. **Responsive Design**: Ensure usability across devices.

---

## Tech Stack
### Frontend
- **React** (v18.3.1): Core library for building the user interface.
- **React Router DOM** (v7.1.1): For navigation and routing.
- **React Helmet** (v6.1.0): Manage meta tags dynamically.
- **React Hook Form** (v7.54.2): For form handling.
- **Zod** (v3.24.1): Schema validation.
- **Classnames** (v2.5.1): Conditional class management.
- **Lucide React** (v0.469.0): Icon library.
- **React Toastify** (v11.0.2): Notifications.

### Backend
- **Appwrite** (v16.1.0): Backend-as-a-Service for database, authentication, and more.

---

## File Structure
```
src/
|-- components/          # Reusable UI components
|-- pages/               # Application pages
|-- services/            # API and Appwrite service logic
|-- hooks/               # Custom React hooks
|-- contexts/            # Context API for global state
|-- utils/               # Utility functions
|-- styles/              # Global stylesheets
|-- App.jsx              # Main app component
|-- index.jsx            # Entry point
```

---

## Setup and Installation
### Prerequisites
1. Node.js (>=16.x.x)
2. Appwrite server configured with:
   - Database
   - Authentication service
   - Storage

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/astramind-ai.git
   ```
2. Navigate to the project directory:
   ```bash
   cd astramind-ai
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Configure Appwrite:
   - Set up your Appwrite server and obtain the required endpoint and project ID.
   - Update `src/services/appwrite.js` with your Appwrite credentials.
5. Start the development server:
   ```bash
   npm start
   ```

---

## Configuration
### Appwrite Service
Create a file `src/services/appwrite.js`:
```javascript
import { Appwrite } from 'appwrite';

const client = new Appwrite();
client
  .setEndpoint('https://[YOUR_APPWRITE_ENDPOINT]') // Your Appwrite Endpoint
  .setProject('[YOUR_PROJECT_ID]'); // Your Appwrite Project ID

export { client };
```

### Environment Variables
Create a `.env` file in the root directory for sensitive information:
```
REACT_APP_APPWRITE_ENDPOINT=https://[YOUR_APPWRITE_ENDPOINT]
REACT_APP_PROJECT_ID=[YOUR_PROJECT_ID]
REACT_APP_API_KEY=[YOUR_AI_API_KEY]
```

---

## Components and Pages
### Components
#### Header
Reusable navigation bar with branding and menu items.
- Props: `isLoggedIn` (boolean)

#### ChatBox
Interactive chat interface for AI interaction.
- Props: `messages`, `onSendMessage`

#### Notification
Toast notifications using React Toastify.
- Props: `type`, `message`

### Pages
#### Home
Landing page showcasing the application's capabilities.

#### Login
User authentication page with Appwrite integration.

#### Dashboard
Main user interface for interacting with AI and managing history.

#### Settings
Allow users to manage their profiles and preferences.

---

## Unique Feature: Real-Time Collaboration
Enable multiple users to work on a shared document/chat session simultaneously using WebSocket or Appwrite's real-time database capabilities.

### Implementation Steps
1. **Setup Collaboration Collection**:
   - Create a collection in Appwrite to store collaboration data.
2. **Frontend Integration**:
   - Use WebSocket to broadcast changes in real-time.
   - Update UI dynamically based on received events.

---

## Deployment
1. Build the React app:
   ```bash
   npm run build
   ```
2. Host the static files on a platform like Netlify, Vercel, or AWS S3.
3. Ensure your Appwrite server is publicly accessible.

---

## Future Enhancements
1. Add support for voice-to-text AI interaction.
2. Introduce advanced AI analytics.
3. Implement a premium subscription model with additional features.

---

## Conclusion
This AstraMind AI project is a robust application designed to highlight your expertise in working with AI APIs and modern web technologies. By following this documentation, you can successfully build, deploy, and showcase the application in your portfolio.
