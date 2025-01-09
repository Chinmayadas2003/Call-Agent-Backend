const gptService = require('../services/gptService');

const handlePrompt = async (req, res) => {
    try {
        const { prompt } = req.body;
        const response = await gptService.getGPTResponse(prompt);
        res.status(200).json({ reply: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { handlePrompt };
