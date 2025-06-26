const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

const games = [
  {
    id: 1,
    title: "Kasparov vs Karpov 1985",
    pgn: "[Event \"World Championship\"]\n1. e4 e5 2. Nf3 Nc6 3. Bb5 a6 ..."
  },
  {
    id: 2,
    title: "Fischer vs Spassky 1972",
    pgn: "[Event \"World Championship\"]\n1. e4 c5 2. Nf3 d6 3. d4 ..."
  }
];

app.get('/games', (req, res) => {
  res.json(games);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});