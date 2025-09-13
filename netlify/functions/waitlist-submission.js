// const { neon } = require('@neondatabase/serverless'); // Uncomment for DB later

// Test function first
exports.handler = async (event) => {
  console.log('Function called with method:', event.httpMethod);
  console.log('Body:', event.body);

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        error: 'Method not allowed. Received: ' + event.httpMethod
      }),
    };
  }

  try {
    // For testing purposes, let's just log and return success without DB
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        success: true,
        message: 'Function is working!',
        timestamp: new Date().toISOString()
      }),
    };

  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        error: 'Internal error',
        details: error.message
      }),
    };
  }
};
