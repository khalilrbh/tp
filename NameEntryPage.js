// src/NameEntryPage.js

import React, { useState } from 'react';

const NameEntryPage = ({ onNameSubmit }) => {
  const [name, setName] = useState('');

  const handleNameSubmit = () => {
    if (name.trim() !== '') {
      onNameSubmit(name);
    }
  };

  return (
    <div>
      <h1>Enter Your Name</h1>
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleNameSubmit}>Start Chat</button>
    </div>
  );
};

export default NameEntryPage;
