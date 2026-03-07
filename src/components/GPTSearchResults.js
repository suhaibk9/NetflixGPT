import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { FaRobot, FaMagic } from "react-icons/fa";

const AIThinkingLoader = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-4">
      {/* AI Brain Animation */}
      <div className="relative mb-8">
        {/* Outer pulsing rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-32 h-32 rounded-full border-2 border-red-500/30 animate-ping"
            style={{ animationDuration: "2s" }}
          />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-24 h-24 rounded-full border-2 border-red-500/50 animate-ping"
            style={{ animationDuration: "1.5s", animationDelay: "0.5s" }}
          />
        </div>

        {/* Center icon */}
        <div className="relative w-20 h-20 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
          <svg
            className="w-10 h-10 text-white animate-pulse"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        </div>
      </div>

      {/* Text */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center">
        AI is finding movies for you
      </h2>
      <p className="text-gray-400 text-center max-w-md">
        Analyzing your request and searching for the perfect recommendations...
      </p>

      {/* Animated dots */}
      <div className="flex gap-2 mt-6">
        <div
          className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "0ms" }}
        />
        <div
          className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "150ms" }}
        />
        <div
          className="w-3 h-3 bg-red-500 rounded-full animate-bounce"
          style={{ animationDelay: "300ms" }}
        />
      </div>

      {/* Subtle movie reel decoration */}
      <div className="mt-12 flex gap-4 opacity-30">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-16 h-24 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg"
            style={{
              animation: "pulse 2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

const GPTSearchResults = () => {
  const click = useSelector((state) => state.gpt.searchClicked);
  const gptSearchResults = useSelector((state) => state.gpt.gptSearchResults);

  if (click) {
    return (
      <div className="relative z-20 mx-4 md:mx-5 mb-5 min-h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70 backdrop-blur-sm rounded-2xl" />
        <div className="relative z-10">
          <AIThinkingLoader />
        </div>
      </div>
    );
  }

  // Aggregate only the best matches (first result) from each query
  const bestMatches = gptSearchResults
    ? gptSearchResults
        .map((results, index) =>
          results && results.length > 0 ? results[0] : null,
        )
        .filter((movie) => movie !== null)
    : [];

  if (!bestMatches || bestMatches.length === 0) return null;

  return (
    <div className="relative z-20 bg-black/80 backdrop-blur-sm mx-4 md:mx-5 mb-5 overflow-hidden -translate-y-14 md:translate-y-0 rounded-xl pb-10">
      <div className="p-6 md:p-8 border-b border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 flex items-center gap-3">
          <FaRobot className="text-red-500 h-8 w-8" />
          AI Recommendations
          <FaMagic className="text-yellow-500 h-6 w-6 animate-pulse" />
        </h2>
        <p className="text-gray-400 mt-2 text-lg">
          Here are the best matches for your search
        </p>
      </div>

      {/* Display all best matches in a single list */}
      <div className="mt-4">
        <MovieList title="" movies={bestMatches} />
      </div>
    </div>
  );
};

export default GPTSearchResults;
