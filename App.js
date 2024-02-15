// src/App.js

import React, { useState } from 'react';
import './App.css';
import NameEntryPage from './NameEntryPage';

function App() {
  const [name, setName] = useState('');
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [showChat, setShowChat] = useState(false);

  const handleNameSubmit = (enteredName) => {
    setName(enteredName);
    setShowChat(true);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      const newMessage = { sender: name, text: inputText };
      setMessages([...messages, newMessage]);
      setInputText('');
    }
  };

  return (
    <div className="App">
      {!showChat ? (
        <NameEntryPage onNameSubmit={handleNameSubmit} />
      ) : (
        <div className="chat-container">
          <div className="chat-header">
            <h1>Chat App - {name}</h1>
          </div>
          <div className="chat-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender.toLowerCase()}`}>
                {`${message.sender}: ${message.text}`}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
