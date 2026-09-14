// App.tsx
import React, { useState } from 'react';

function App() {
  const [videoUrl, setVideoUrl] = useState('');
  const [summary, setSummary] = useState('');
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<string[]>([]);

  const handleAnalyze = async () => {
    const res = await fetch('/api/analyze', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: videoUrl }),
    });
    const data = await res.json();
    setSummary(data.summary);
  };

  const handleChat = async () => {
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: chatInput }),
    });
    const data = await res.json();
    setChatHistory([...chatHistory, `You: ${chatInput}`, `AI: ${data.reply}`]);
    setChatInput('');
  };

  return (
    <div>
      <h1>AI Video Analyzer</h1>
      <input value={videoUrl} onChange={e => setVideoUrl(e.target.value)} placeholder="Paste YouTube link" />
      <button onClick={handleAnalyze}>Analyze</button>
      <h2>Summary</h2>
      <p>{summary}</p>
      <h2>Chat</h2>
      <input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Ask about the video" />
      <button onClick={handleChat}>Send</button>
      <div>{chatHistory.map((msg, i) => <p key={i}>{msg}</p>)}</div>
    </div>
  );
}

export default App;