import ytdl from 'ytdl-core';
import fs from 'fs';
import path from 'path';

/**
 * Dummy transcription function — replace with actual logic later.
 */
async function transcribeAudio(audioPath: string): Promise<string> {
  console.log(`Transcribing audio from: ${audioPath}`);
  return 'This is a dummy transcript from audio.';
}

/**
 * Extracts transcript from a YouTube video.
 * If transcript is unavailable, downloads audio and transcribes it.
 */
export async function extractTranscriptOrAudio(url: string): Promise<string> {
  const audioPath = path.resolve('audio.mp3');

  try {
    const audioStream = ytdl(url, { filter: 'audioonly' });
    const writeStream = fs.createWriteStream(audioPath);

    await new Promise<void>((resolve, reject) => {
      audioStream.pipe(writeStream);
      writeStream.on('finish', resolve);
      writeStream.on('error', reject);
    });

    const transcript = await transcribeAudio(audioPath);
    return transcript;
  } catch (error) {
    console.error('Error in extractTranscriptOrAudio:', error);
    return 'Transcript extraction failed.';
  }
}