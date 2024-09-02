import express from 'express';

const app = express(); // Creating an instance of an Express application

// Default route to check if the server is ready
app.get('/', (req, res) => {
  res.send('Server is ready!');
});

// Route to return 5 words with definitions
app.get('/api/words', (req, res) => {
  const words = [
    {
      "word": "Eloquent",
      "definition": "Fluent or persuasive in speaking or writing."
    },
    {
      "word": "Serendipity",
      "definition": "The occurrence of events by chance in a happy or beneficial way."
    },
    {
      "word": "Ephemeral",
      "definition": "Lasting for a very short time."
    },
    {
      "word": "Ubiquitous",
      "definition": "Present, appearing, or found everywhere."
    },
    {
      "word": "Quintessential",
      "definition": "Representing the most perfect or typical example of a quality or class."
    }
  ];

  res.json(words);
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
