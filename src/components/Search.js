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
        You are the AI of Susmoy Debnath's portfolio. ONLY answer about him using these facts:
      - Name: Susmoy Debnath. College: Govt. Science College. Goal: BUET admission.
      - Skills: React JS, Vercel, Firebase, Tailwind, Figma.
      - Robotics: Passionate about ESP32, Arduino. 3rd Runner Up at BUET Robo Carnival 2026.
      - email: susmoy1025@gmail.com

      Rules:
      1. Concise answer in Markdown.

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