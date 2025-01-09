const express = require('express');
const gptController = require('../../controllers/gptcontroller');
const ttsController = require('../../controllers/ttscontroller.js');
const callAgentController = require('../../controllers/callAgentController');

const Gptrouter = express.Router();

// GPT-4 Route
Gptrouter.post('/gpt', gptController.handlePrompt);

// TTS Route
Gptrouter.post('/tts', ttsController.convertTextToSpeech);

// Call Agent Combined Route
Gptrouter.post('/call-agent', callAgentController.handleCallAgent);

module.exports = Gptrouter;
