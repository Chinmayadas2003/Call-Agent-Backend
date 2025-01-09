const callAgentService = require("../services/callAgentService");

const handleCallAgent = async (req, res) => {
    console.log("CallAgent Controller triggered.");
    try {
        const { prompt } = req.body;
        console.log("Received prompt:", prompt);

        // Step 1: Get the audio stream from the CallAgent service
        const audioStream = await callAgentService.handleCallAgent(prompt);

        // Step 2: Stream the audio response to the client
        console.log("Streaming audio to client...");
        res.set({
            "Content-Type": "audio/mpeg",
            "Content-Disposition": 'attachment; filename="callAgentResponse.mp3"', // Prompts download
            "Transfer-Encoding": "chunked", // Enables streaming
        });

        // Stream audio chunks to the client
        for await (const chunk of audioStream) {
            res.write(chunk);
        }

        // End the response
        res.end();
        console.log("Audio stream successfully sent.");
    } catch (error) {
        console.error("Error in CallAgent Controller:", error.message);
        res.status(500).json({ error: error.message });
    }
};

module.exports = { handleCallAgent };
