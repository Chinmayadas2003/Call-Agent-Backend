const gptService = require("./gptService");
const ttsService = require("./ttsService");

 

const handleCallAgent = async (prompt, chatHistory) => {
    try {
        console.log("CallAgent Service triggered...");

        // Step 1: Get GPT response
        console.log("Fetching response from GPT...");
        const gptResponse = await gptService.getGPTResponse(prompt, chatHistory);

        console.log("GPT response received:", gptResponse);
        chatHistory.push({ 
            "role" : "assistant",
            "content": gptResponse 
        });
        // console.log("Chat history updated:", chatHistory);

        // Step 2: Convert GPT response to audio stream
        console.log("Converting GPT response to speech...");
        // const audioStream = await ttsService.getSpeechStream(gptResponse);
        const audioStream = await ttsService.fetchSpeechStream(gptResponse);

        console.log("Audio stream generated successfully.");
        return audioStream;
    } catch (error) {
        console.error("Error in CallAgent Service:", error.message);
        throw new Error("Failed to handle CallAgent flow.");
    }
};

module.exports = { handleCallAgent };
