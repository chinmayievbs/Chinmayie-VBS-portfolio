import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { extractTranscriptOrAudio } from './utils.js'; // ✅ include .js extension
dotenv.config();

const app = express();
app.use(bodyParser.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

app.post('/api/analyze', async (req: Request, res: Response) => {
  console.log('Received /api/analyze request:', req.body);

  try {
    const { url } = req.body;

    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid "url" in request body.' });
    }

    const transcript = await extractTranscriptOrAudio(url);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(`Summarize this video:\n${transcript}`);
    const summary = result.response.text();

    res.json({ summary });
  } catch (error) {
    console.error('Error in /api/analyze:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const result = await model.generateContent(req.body.message);
    res.json({ reply: result.response.text() });
  } catch (error) {
    console.error('Error in /api/chat:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
app.get('/', (req: Request, res: Response) => {
  res.send('🎉 Server is running! Try POSTing to /api/analyze or /api/chat');
});