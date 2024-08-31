// index.js
require('dotenv').config();
const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require("cors")

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
const client = new MongoClient("your db url", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let db;

async function connectDB() {
  try {
    await client.connect();
    db = client.db("your db name"); // Get the database from the environment variable
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process if the connection fails
  }
}

app.get('/comments', async (req, res) => {
  try {
    const comments = await db.collection('Comment').find({}).toArray();
    res.json(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ error: 'Failed to fetch comments' });
  }
});

app.post('/comments', async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });
    }

    const result = await db.collection('Comment').insertOne({
      content,
    });
   
    return res.json({
        msg: "comment added"
    })
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ error: 'Failed to create comment' });
  }
});

// Connect to the database and start the server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});

// Handle graceful shutdown
process.on('SIGINT', async () => {
  console.log('SIGINT signal received. Closing MongoDB connection...');
  await client.close();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('SIGTERM signal received. Closing MongoDB connection...');
  await client.close();
  process.exit(0);
});
