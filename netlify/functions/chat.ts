import { Handler } from '@netlify/functions';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const handler: Handler = async (event) => {
  // Enable CORS
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: ''
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  try {
    const { messages } = JSON.parse(event.body || '{}');

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
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: completion.choices[0].message.content
      })
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        error: 'Failed to process request',
        details: error instanceof Error ? error.message : 'Unknown error'
      })
    };
  }
};

export { handler };