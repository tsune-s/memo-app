import React, { useEffect, useState } from 'react';

function App() {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState('');

  useEffect(() => {
    fetch('http://localhost:3001/api/notes')
      .then(res => res.json())
      .then(data => setNotes(data));
  }, []);

  const addNote = () => {
    fetch('http://localhost:3001/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ note: newNote })
    })
      .then(() => {
        setNotes(prev => [...prev, newNote]);
        setNewNote('');
      });
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>メモアプリ</h1>
      <input
        value={newNote}
        onChange={e => setNewNote(e.target.value)}
        placeholder="新しいメモ"
      />
      <button onClick={addNote}>追加</button>
      <ul>
        {notes.map((note, i) => (
          <li key={i}>{note}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
