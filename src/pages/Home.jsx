import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Home = () => {
  const [query, setQuery] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAsk = async () => {
    try {
      const response = await axios.post("http://localhost:3333/", { query });
      setAnswer(response.data.answer);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAsk();
    }
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", maxHeight: "100vh" }}>
        {/* Left side of the screen (blank) */}
        <div style={{ flex: 1 }} />
        {/* Right side of the screen (chat with a bot) */}
        <div
          className="flex flex-1 p-4"
          style={{
            height: "calc(100vh - 64px)", // Adjusted for the navbar
            maxHeight: "calc(100vh - 97px)", // Adjusted for the navbar and additional padding
          }}
        >
          <div className="flex flex-col w-full h-full border-2 border-gray-400 bg-gray-100">
            {/* Message history */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {/* Messages will go here */}
              {answer && (
                <p className="bg-white p-3 rounded shadow">{answer}</p>
              )}
            </div>

            {/* Input + Button */}
            <div className="flex p-4 space-x-4">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 px-4 py-2 border-2 border-gray-400 rounded"
              />
              <button
                onClick={handleAsk}
                className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              >
                Ask
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
