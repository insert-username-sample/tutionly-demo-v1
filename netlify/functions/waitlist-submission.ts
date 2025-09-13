import { neon } from '@neondatabase/serverless';

interface LambdaEvent {
  httpMethod: string;
  body: string;
}

export const handler = async (event: LambdaEvent) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { name, email, phone, role, primaryUse, willingnessToPay, preferredTutorFormat, learningStyle, biggestFrustration, joinWaitlistPerks } = JSON.parse(event.body);

    if (!name || !email || !role || !primaryUse || !willingnessToPay || !preferredTutorFormat || !learningStyle || !joinWaitlistPerks) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields' }),
      };
    }

    // Initialize Neon SQL connection
    const sql = neon(process.env.NETLIFY_DATABASE_URL!);

    // Insert data into Neon database using templated SQL for security
    const result = await sql`
      INSERT INTO waitlist (
        name, email, phone, role, primary_use, willingness_to_pay,
        preferred_tutor_format, learning_style, biggest_frustration,
        join_waitlist_perks
      ) VALUES (
        ${name}, ${email}, ${phone || null}, ${role}, ${primaryUse}, ${willingnessToPay},
        ${preferredTutorFormat}, ${learningStyle}, ${biggestFrustration || null}, ${joinWaitlistPerks}
      )
      RETURNING id
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Successfully added to waitlist!',
        data: { id: result[0].id }
      }),
    };

  } catch (error: unknown) {
    console.error('Database error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to submit form. Please try again.',
        details: process.env.NODE_ENV === 'development' && error instanceof Error ? error.message : 'Internal server error'
      }),
    };
  }
}
