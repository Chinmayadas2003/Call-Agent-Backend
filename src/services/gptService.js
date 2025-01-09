const OpenAI = require("openai");

// Initialize OpenAI instance
const openai = new OpenAI();

const getGPTResponse = async (prompt) => {
    try {
        // Call the OpenAI API
        const completion = await openai.chat.completions.create({
            model: "gpt-4o", // Specify the model
            store: true, // Enable storing of the conversation
            messages: [
                { role: "user", content: prompt }
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
