import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

let notes: string[] = [];

app.get('/api/notes', (req, res) => {
  res.json(notes);
});

app.post('/api/notes', (req, res) => {
  const note = req.body.note;
  notes.push(note);
  res.status(201).json({ message: 'Note added' });
});

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
