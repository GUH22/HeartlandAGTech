# Setting Up Contact Form Email with AWS SES

## Overview
This guide explains how to set up email functionality for the contact form using AWS SES (Simple Email Service), Lambda, and API Gateway.

**Note:** S3 buckets are for file storage, not email. For sending emails, you need AWS SES.

## Prerequisites
- AWS Account
- AWS CLI installed and configured
- Node.js installed (for local testing)

## Step 1: Verify Your Email in AWS SES

1. Go to AWS Console → SES (Simple Email Service)
2. Navigate to "Verified identities"
3. Click "Create identity"
4. Select "Email address"
5. Enter `info@heartlandag.tech`
6. Click "Create identity"
7. Check your email and click the verification link

## Step 2: Request Production Access (if needed)

- If you're in the SES sandbox, you can only send to verified emails
- To send to any email, request production access in SES console

## Step 3: Create Lambda Function

1. Go to AWS Console → Lambda
2. Click "Create function"
3. Choose "Author from scratch"
4. Function name: `contact-form-handler`
5. Runtime: Node.js 18.x or later
6. Click "Create function"

## Step 4: Upload Lambda Code

1. In the Lambda function, scroll to "Code source"
2. Copy the code from `lambda/contact-form-handler.js`
3. Paste it into the Lambda editor
4. Click "Deploy"

## Step 5: Install Dependencies

1. In Lambda console, go to "Code" tab
2. Click "Upload from" → ".zip file"
3. Create a zip file with:
   - `contact-form-handler.js`
   - `node_modules/` (run `npm install` in the lambda folder first)
4. Upload the zip file

Or use Lambda Layers for aws-sdk (it's included by default in Node.js runtime).

## Step 6: Set Up IAM Permissions

1. In Lambda function, go to "Configuration" → "Permissions"
2. Click on the execution role
3. Add the following policy:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "ses:SendEmail",
        "ses:SendRawEmail"
      ],
      "Resource": "*"
    }
  ]
}
```

## Step 7: Create API Gateway

1. Go to AWS Console → API Gateway
2. Click "Create API"
3. Choose "REST API" → "Build"
4. API name: `contact-form-api`
5. Click "Create API"
6. Click "Actions" → "Create Resource"
7. Resource name: `contact`
8. Enable CORS: Yes
9. Click "Create Resource"
10. Click "Actions" → "Create Method" → "POST"
11. Integration type: Lambda Function
12. Select your Lambda function: `contact-form-handler`
13. Click "Save" → "OK"
14. Click "Actions" → "Deploy API"
15. Deployment stage: `prod` (or create new)
16. Click "Deploy"
17. Copy the "Invoke URL" (e.g., `https://abc123.execute-api.us-east-1.amazonaws.com/prod`)

## Step 8: Configure Environment Variable

1. Create a `.env` file in your project root (if it doesn't exist)
2. Add your API Gateway URL:
   ```
   VITE_CONTACT_API_URL=https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/contact
   ```
   Replace with your actual API Gateway endpoint URL.

3. Restart your development server for the changes to take effect.

**Note:** For Vite projects, environment variables must be prefixed with `VITE_` to be accessible in the browser.

## Step 9: Test

1. Fill out the contact form on your website
2. Submit the form
3. Check `info@heartlandag.tech` for the email

## Alternative: Simpler Solutions

If you want a simpler setup without AWS Lambda/SES:

1. **EmailJS** - Free tier available, no backend needed
2. **Formspree** - Easy form handling service
3. **SendGrid** - Email service with API

Would you like me to implement one of these simpler alternatives instead?

