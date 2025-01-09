const { ElevenLabsClient } = require("elevenlabs");
const { Readable } = require("stream");

// Initialize ElevenLabs client
const client = new ElevenLabsClient({
    apiKey: process.env.ELEVENLABS_API_KEY, // Your ElevenLabs API Key
});

const getSpeechStream = async (text) => {
    try {
        console.log("Initializing text-to-speech streaming...");

        // Generate audio as a stream using ElevenLabs
        const audioStream = await client.textToSpeech.convertAsStream(
            "JBFqnCBsd6RMkjVDRZzb", // Replace with your voice ID
            {
                text: text,
                model_id: "eleven_multilingual_v2", // Use multilingual model
            }
        );

        console.log("TTS streaming successful.");
        return Readable.from(audioStream); // Return a readable stream
    } catch (error) {
        console.error("Error in TTS Service:", error.message);
        throw new Error("Failed to generate speech stream from text.");
    }
};

module.exports = { getSpeechStream };
