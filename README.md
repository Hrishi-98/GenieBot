🤖 **Gemini ChatBot – Angular + Google Generative AI**

A minimalist chatbot UI built with Angular standalone components and integrated with the Gemini API (Google Generative AI). This project demonstrates sending prompts to the Gemini model, displaying AI responses in a styled chat interface, and handling real-time message updates via RxJS.

✨ **Features**

    🧠 Text Generation using Gemini 2.0 Flash model (Generative AI)
    
    📨 Two-way chat UI with roles (User & Bot)
    
    🔄 Real-time updates using BehaviorSubject and RxJS
    
    🎨 Skeleton loading UI while waiting for AI response
    
    ⚡️ Built with Angular standalone components

🧱 **Project Structure**

    src/app/
    ├── app.component.ts         # Main component with chat logic
    ├── app.component.html       # Chat UI layout
    ├── gemini-service.service.ts# Gemini API integration
    ├── skeleton/                # Skeleton loader component
    
🧠 **How It Works**

    🗂 Gemini Service (gemini-service.service.ts)
        Uses GoogleGenerativeAI SDK
    
        Sends prompt to gemini-2.0-flash model
    
        Publishes user and bot messages via BehaviorSubject
    
    💬 Chat UI (app.component.html)
        Renders chat history using *ngFor
        
        Displays user or bot icon based on from field
        
        Calls sendData() on button click or Enter key
    
    ⌛ Loading State
        Shows app-skeleton when a message is in progress

🚀 **How to Run**

    ⚠️ Make sure your Google AI API key is valid and usage enabled.
    
    # 1. Install dependencies
    npm install
    
    # 2. Run Angular app
    ng serve
    
    # 3. Open in browser
    http://localhost:4200
    
🔑 **Configuration**

Update the API key inside gemini-service.service.ts:

    this.generativeAI = new GoogleGenerativeAI('YOUR_API_KEY_HERE');
    
📌 **Notes**

    Currently using gemini-2.0-flash model — adjust as needed.
    
    No persistence — chat is lost on refresh (RxJS-based only).
    
    Designed as a learning/demo project; production enhancements recommended (e.g. token safety, input validation, etc.).

🧩 Improvements You Can Try

    Add timestamp to messages
    
    Save chat history in localStorage
    
    Use Angular Material or Tailwind for cleaner UI
    
    Integrate markdown parsing for richer responses
    
    Add typing animation while AI responds
