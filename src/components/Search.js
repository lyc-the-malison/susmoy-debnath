import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GoogleGenerativeAI } from "@google/generative-ai";
import ReactMarkdown from 'react-markdown'; // Import ReactMarkdown

export default function Search() {
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior (page reload)

    if (!query.trim()) { // Don't search if query is empty
      setAnswer('Please enter a query to ask.');
      setShow(true);
      return;
    }

    setLoading(true);
    setShow(true); // Show the popup
    setAnswer(''); // Clear previous answer
    const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
    if (!apiKey) {
      console.error("Gemini API Key is not found in .env. Make sure REACT_APP_GEMINI_API_KEY is set and you've restarted your dev server.");
      setAnswer("Error: API key missing. Please configure your .env file.");
      setLoading(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash"});
      
      // Strict Context Prompt for Susmoy's Portfolio
      const promptContext = `
        You are a strict, specialized AI assistant embedded in Susmoy Debnath's personal portfolio website. 
        Your ONLY purpose is to answer questions directly related to Susmoy Debnath and his portfolio based on the verified facts below.

        [VERIFIED FACTS ABOUT SUSMOY DEBNATH]:
        - Name: Susmoy Debnath
        - Education: Class 12 student at Govt. Science College, Dhaka.
        - Academic Goal: Engineering aspirant, strongly targeting BUET admission.
        - Core Skills: Web Developer using React JS, Vercel, Firebase, Tailwind CSS, Figma, Kali Linux, Video Editing, Photoshop, Digital Art.
        - Hardware/Robotics Interests: Passionate about robotics hardware, microcontrollers (specifically ESP32 and Arduino).
        - Achievements:
          * Secured 3rd Runner Up position in the Robo Olympiad segment at BUET Robo Carnival 2026.
          * Achieved a perfect score in the QuizHunt 5.0 IQ Quiz.
        - School is Shahed Babul Academy and High School is Faizur Rahman Ideal Institute

        [STRICT INSTRUCTIONS]:
        1. IF the user's query is about Susmoy, his skills, education, college, or achievements, answer professionally and concisely using the verified facts above. Format with Markdown where appropriate.
        2. IF the user's query is OUT OF CONTEXT (e.g., general knowledge, coding help, math, recipes, or anything not directly about Susmoy), you MUST politely refuse to answer. State that you are only configured to answer portfolio or personal queries about Susmoy Debnath.
        3. Do not make up any facts outside of what is provided above.
        4. Don't include his buet goal in every reply, add it only where is need.

        User Query: ${query}
      `;

      const result = await model.generateContent(promptContext);
      const response = await result.response;
      const text = response.text();
      setAnswer(text);
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      const errorMessage = `Sorry, I couldn't fetch an answer at this time. Error: ${error.message || error}`;
      setAnswer(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShow(false);
  };

  return (
    <form className="flex items-center justify-center py-4 text-sm" onSubmit={handleSearch}>
      <button type="submit" className="flex relative -right-8 transform active:scale-75 transition-transform">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
            stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 21L16.65 16.65" stroke="#7D7D7D" strokeWidth="2" strokeLinecap="round"
            strokeLinejoin="round" />
        </svg>
      </button>
      <input
        type="text"
        placeholder="Ask anything you want"
        className="w-5/6 lg:w-1/2 py-2 px-2 flex items-center justify-center rounded-2xl bg-neutral-700/30 text-white border border-1 border-[#494949] placeholder-[#7D7D7D] text-right sm:text-center"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
      />

      {show && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40" onClick={handleClosePopup}></div>
      )}

      {show && (
        <motion.div
          className="alert shadow-lg bg-neutral-900/80 border-neutral-500 lg:w-1/2 fixed inset-0 m-auto w-fit h-fit z-50 min-h-[150px] flex-col"
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          key={answer || 'loading'}
        >
          <div>
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-neutral-300">Results:</h3>
              <button className="text-neutral-300 hover:text-neutral-400" onClick={handleClosePopup}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="text-xs text-neutral-300 mt-2 overflow-y-auto max-h-[calc(100vh-200px)]">
              {loading ? (
                'Loading...'
              ) : answer ? (
                <ReactMarkdown>
                  {answer}
                </ReactMarkdown>
              ) : (
                'Enter your query to search.'
              )}
            </div>
          </div>
        </motion.div>
      )}
    </form>
  );
}