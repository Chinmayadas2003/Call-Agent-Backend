const OpenAI = require("openai");

// Initialize OpenAI instance
const openai = new OpenAI();

const getGPTResponse = async (prompt, chatHistory) => {
    try {
        // Call the OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // Specify the model
            store: true, // Enable storing of the conversation
            messages: [
                { 
                    role: "system", 
                    content: "You are an AI phone agent for a SAAS company named smallest.ai. Your role is to sell their products, including realistic Text-to-Speech (TTS) APIs and other AI solutions. You hold meaningful conversations, address customer queries effectively, and close sales persuasively. Keep the response very short and to the point." 
                },
                ...chatHistory.map((message) => ({ role: message.role, content: message.content })), // Include past conversation history
                { 
                    role: "user", 
                    content: prompt 
                }
            ]
        });
        

        // Extract the reply content
        const reply = completion.choices[0].message.content;
        return reply;
    } catch (error) {
        // Handle API errors
        console.error("Error in GPT Service:", error.message);
        throw new Error("Failed to generate response from GPT-4.");
    }
};

// Export the service
module.exports = { getGPTResponse };
