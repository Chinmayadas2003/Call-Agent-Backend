const gptService = require("./gptService");
const ttsService = require("./ttsService");

const handleCallAgent = async (prompt) => {
    try {
        console.log("CallAgent Service triggered...");

        // Step 1: Get GPT response
        console.log("Fetching response from GPT...");
        const gptResponse = await gptService.getGPTResponse(prompt);

        console.log("GPT response received:", gptResponse);

        // Step 2: Convert GPT response to audio stream
        console.log("Converting GPT response to speech...");
        const audioStream = await ttsService.getSpeechStream(gptResponse);

        console.log("Audio stream generated successfully.");
        return audioStream;
    } catch (error) {
        console.error("Error in CallAgent Service:", error.message);
        throw new Error("Failed to handle CallAgent flow.");
    }
};

module.exports = { handleCallAgent };
