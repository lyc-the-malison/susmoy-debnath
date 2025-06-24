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

    // Custom response for specific queries about "Susmoy" or "Susmoy Debnath"
    const lowerCaseQuery = query.toLowerCase();
    if (lowerCaseQuery.includes("susmoy") || lowerCaseQuery.includes("susmoy debnath")) {
 setAnswer("Susmoy Debnath is a student of Govt. Science College and the owner of this portfolio site. You can check his info in the about section.");
      setLoading(false);
 setShow(true);
 return; // Stop further execution
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
      // Ensure the model name is correct, e.g., "gemini-pro" for text.
      // If you are using a different model, ensure it's specified correctly.
      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
      const result = await model.generateContent(query);
      const response = await result.response;
      const text = response.text();
      setAnswer(text);
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      // Provide more detailed error for debugging in development
      const errorMessage = `Sorry, I couldn't fetch an answer at this time. Error: ${error.message || error}`;
      setAnswer(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleClosePopup = () => {
    setShow(false);
    // Optionally, clear the answer when closing the popup
    // setAnswer('');
  };

  return (
    <form className="flex items-center justify-center py-4 text-sm" onSubmit={handleSearch}>
      {/* The search icon button will no longer trigger the popup directly,
          as the form submission will handle showing it after a search. */}
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
        disabled={loading} // Disable input while loading
      />

 {/* Overlay for blur effect when popup is shown */}
 {show && (
 <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm z-40" onClick={handleClosePopup}></div>
 )}

      {show && (
        <motion.div
          className="alert shadow-lg bg-neutral-900/80 border-neutral-500 lg:w-1/2 fixed inset-0 m-auto w-fit h-fit z-50 min-h-[150px] flex-col"
          initial={{ x: 2000 }}
          animate={{ x: 0 }}
          // Added a key to force re-render/re-animation if content changes, useful for quick successive searches
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
 <div className="text-xs text-neutral-300 mt-2 overflow-y-auto max-h-[calc(100vh-200px)]"> {/* Added max-height and overflow for scrollability */}
              {loading ? ( // text-left ensures left alignment across all screen sizes
                'Loading...'
              ) : answer ? (
 <ReactMarkdown>
 {answer}
 </ReactMarkdown> // Render markdown
              ) : (
                'Enter your query to search.' // Fallback if no answer yet
              )}
            </div>
          </div>
        </motion.div>
      )}
    </form>
  );
}