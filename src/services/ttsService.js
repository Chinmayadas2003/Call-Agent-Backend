const { Readable } = require("stream");


const fetchSpeechStream = async (text) => {
    const options = {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + process.env.WAVES_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        voice_id: 'emily',
        text: text,
        speed: 1,
        sample_rate: 24000,
        add_wav_header: true,
      }),
    };
  
    try {
      console.log("Initializing text-to-speech streaming...");
  
      const response = await fetch('https://waves-api.smallest.ai/api/v1/lightning/get_speech', options);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Return a readable stream if the response supports it
      const readableStream = response.body; // response.body is a ReadableStream
      console.log("TTS streaming successful.");
  
      return readableStream; // Return the stream for further use
    } catch (error) {
      console.error("Error in TTS Service:", error.message);
      throw new Error("Failed to generate speech stream from text.");
    }
  };
  
  module.exports = { fetchSpeechStream };
  