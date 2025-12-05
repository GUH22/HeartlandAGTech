// AWS Lambda function to handle contact form submissions via SES
// This function should be deployed to AWS Lambda and connected to API Gateway

const AWS = require('aws-sdk');
const ses = new AWS.SES({ region: 'us-east-1' }); // Change region as needed

exports.handler = async (event) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*', // In production, replace with your domain
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json'
  };

  // Handle preflight OPTIONS request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: ''
    };
  }

  try {
    // Parse the request body
    const body = JSON.parse(event.body);
    const { name, email, phone, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Email configuration
    const recipientEmail = 'info@heartlandag.tech'; // Your email address
    const subject = `New Contact Form Submission from ${name}`;
    
    // Create email body
    const emailBody = `
New contact form submission:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

---
This email was sent from the Heartland Ag Tech website contact form.
    `.trim();

    // Send email using SES
    const params = {
      Source: recipientEmail, // Must be verified in SES
      Destination: {
        ToAddresses: [recipientEmail]
      },
      Message: {
        Subject: {
          Data: subject,
          Charset: 'UTF-8'
        },
        Body: {
          Text: {
            Data: emailBody,
            Charset: 'UTF-8'
          }
        }
      },
      ReplyToAddresses: [email] // Allow replying directly to the sender
    };

    await ses.sendEmail(params).promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent successfully' 
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send email',
        message: error.message 
      })
    };
  }
};

