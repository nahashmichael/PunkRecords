const { Resend } = require('resend');

const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting setup
const RATE_LIMIT_WINDOW = 1800000; // 30 minutes in milliseconds
const MAX_REQUESTS = 1; // Maximum 1 request per IP per 30 minutes

// In-memory store for rate limiting (replace with Redis in production)
const rateLimitStore = new Map();

exports.handler = async (event, context) => {
  // Handle CORS preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Max-Age': '86400'
      },
      body: ''
    };
  }

  try {
    // Get client IP
    const clientIP = event.headers['x-forwarded-for'] || 
                    event.headers['x-real-ip'] || 
                    event.headers['client-ip'] || 
                    'unknown';

    // Check rate limit
    const now = Date.now();
    const rateLimit = rateLimitStore.get(clientIP);
    
    if (rateLimit) {
      if (now - rateLimit.timestamp < RATE_LIMIT_WINDOW) {
        if (rateLimit.count >= MAX_REQUESTS) {
          return {
            statusCode: 429,
            headers: {
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
              error: 'Too many requests. Please try again later.' 
            })
          };
        }
        rateLimitStore.set(clientIP, {
          count: rateLimit.count + 1,
          timestamp: rateLimit.timestamp
        });
      } else {
        rateLimitStore.set(clientIP, {
          count: 1,
          timestamp: now
        });
      }
    } else {
      rateLimitStore.set(clientIP, {
        count: 1,
        timestamp: now
      });
    }

    // Parse request body
    const { name, email, phone, message } = JSON.parse(event.body);
    
    // Validate request body
    if (!name || !email || !phone || !message) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Name, email, phone, and message are required' 
        })
      };
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Invalid email format' 
        })
      };
    }

    // Send email using Resend
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY environment variable is not configured');
    }

    try {
      const timestamp = new Date().toISOString();
      const userAgent = event.headers['user-agent'] || 'Unknown';
      
      // Format email content
      const emailContent = `Contact Form Submission
Contact Information
Name: ${name}

Email: ${email}

Phone: ${phone}

Message
${message}

Submission Details:
Time: ${timestamp}
IP: ${clientIP}
User Agent: ${userAgent}`;

      const emailResult = await resend.emails.send({
        from: 'Punk Records <contact@punktech.in>',
        to: ['Keshav.Paliwal@punktech.in'],
        subject: 'New Contact Form Submission',
        text: emailContent,
        reply_to: email
      });
      
      if (emailResult.error) {
        throw new Error(emailResult.error.message);
      }
      
      if (!emailResult.data?.id) {
        throw new Error('No email ID returned from Resend');
      }
      
      console.log('Email sent successfully with ID:', emailResult.data.id);
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      throw emailError;
    }

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        message: 'Message sent successfully' 
      })
    };
  } catch (err) {
    console.error('Error processing contact form:', err);
    
    // Check if it's a known error type
    if (err.message === 'RESEND_API_KEY environment variable is not configured') {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Email service configuration error. Please contact support.' 
        })
      };
    } else {
      return {
        statusCode: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          error: 'Failed to send message. Please try again later.' 
        })
      };
    }
  }
};
