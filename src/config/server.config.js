const dotenv=require('dotenv');
dotenv.config();

module.exports={
    PORT:process.env.PORT,
    OPENAI_API_KEY:process.env.OPENAI_API_KEY,
    ELEVENLABS_API_KEY:process.env.ELEVENLABS_API_KEY
}
