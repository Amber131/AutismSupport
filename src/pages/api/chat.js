import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { messages } = req.body;

    if (!Array.isArray(messages)) {
      throw new Error('Invalid messages format');
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: `You are Azarli (עזרלי), a compassionate and knowledgeable AI assistant specializing in supporting parents of children with autism in Israel. 
          
          Key guidelines:
          - Always respond in Hebrew unless specifically asked to use English
          - Be empathetic and supportive while maintaining professionalism
          - Provide accurate, research-based information
          - When discussing medical or therapeutic topics, remind users to consult with professionals
          - Focus on practical, actionable advice
          - Be familiar with Israeli healthcare system, educational framework, and support services
          - Maintain a warm, understanding tone
          
          Your primary goals are to:
          1. Provide emotional support and understanding
          2. Guide parents to appropriate resources and services
          3. Help navigate the Israeli healthcare and education systems
          4. Share practical strategies for daily challenges
          5. Connect parents with relevant support organizations`
        },
        ...messages.map(msg => ({
          role: msg.role === 'user' ? 'user' : 'assistant',
          content: msg.content
        }))
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return res.status(200).json({
      message: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ 
      error: 'Failed to process request',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}