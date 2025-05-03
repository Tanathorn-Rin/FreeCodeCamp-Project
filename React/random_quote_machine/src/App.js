import React, { useState } from 'react';
import './App.css';

const quotes = [
  {
    text: "Accept everything just the way it is.",
    author: "Miyamoto Musashi"
  },
  {
    text: "Do not regret what you have done.",
    author: "Miyamoto Musashi "
  },
  {
    text: "Be detached from desire your whole life long.",
    author: "Miyamoto Musashi"
  }
];

function App() {
  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="container">
      <div id="quote-box">
        <p id="text">❝ {quote.text}</p>
        <p id="author">- {quote.author}</p>

        <div className="buttons">
          <div className="left-buttons">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`"${quote.text}" - ${quote.author}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="button"
            >
              <i className="fab fa-tumblr"></i>
            </a>
          </div>
          <button id="new-quote" onClick={getRandomQuote}>New quote</button>
        </div>
      </div>
      <div className="footer">by Tanathorn</div>
    </div>
  );
}

export default App;
