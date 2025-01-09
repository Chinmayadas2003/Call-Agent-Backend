const ttsService = require("../services/ttsService");

const convertTextToSpeech = async (req, res) => {
    console.log("TTS Controller triggered.");
    try {
        const { text } = req.body;
        console.log("Received text:", text);

        // Get the audio stream from the TTS service
        const audioStream = await ttsService.getSpeechStream(text);

        console.log("Streaming audio...");
        // Set headers for the response
        res.set({
            "Content-Type": "audio/mpeg",
            "Content-Disposition": 'attachment; filename="response.mp3"', // Prompts download
            "Transfer-Encoding": "chunked", // Ensures streaming
        });

        // Stream audio chunks to the client
        for await (const chunk of audioStream) {
            res.write(chunk); // Write each audio chunk to the response
        }

        // End the response when streaming is complete
        res.end();
    } catch (error) {
        console.error("Error in TTS Controller:", error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { convertTextToSpeech };

