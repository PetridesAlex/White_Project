import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';
import nodemailer from 'nodemailer';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Google Places API endpoint to fetch reviews
app.get('/api/reviews', async (req, res) => {
  try {
    const placeId = process.env.GOOGLE_PLACE_ID || 'ChIJN1t_tDeuEmsRUsoyG83frY4'; // Default place ID - replace with your actual place ID
    const apiKey = process.env.GOOGLE_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ 
        error: 'Google API key not configured. Please set GOOGLE_API_KEY in your .env file.' 
      });
    }

    // Fetch place details including reviews
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews&key=${apiKey}`;
    
    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== 'OK') {
      return res.status(400).json({ 
        error: 'Failed to fetch reviews from Google Places API',
        details: data.error_message || data.status
      });
    }

    // Format reviews data
    const reviews = (data.result.reviews || []).map(review => ({
      name: review.author_name,
      rating: review.rating,
      text: review.text,
      date: review.relative_time_description || 'Recently',
      profilePhoto: review.profile_photo_url || null,
      time: review.time || Date.now()
    }));

    res.json({
      success: true,
      reviews: reviews,
      placeName: data.result.name,
      averageRating: data.result.rating
    });

  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Configure email transporter
const createTransporter = () => {
  // If email credentials are provided, use them
  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
  // Otherwise return null (email won't work but app won't crash)
  return null;
};

// Contact form email endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false,
        error: 'All fields are required' 
      });
    }

    // Create email transporter
    const transporter = createTransporter();
    
    if (!transporter) {
      // If email is not configured, log the message and return success
      console.log('Contact form submission (email not configured):', {
        name,
        email,
        message
      });
      return res.json({ 
        success: true, 
        message: 'Thank you for your message! We will get back to you soon.',
        note: 'Email service not configured. Message logged to console.'
      });
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'whitetigerbypro@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>Sent from White Tiger Netcafe website</small></p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.json({ 
      success: true, 
      message: 'Thank you for your message! We will get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false,
      error: 'Failed to send message. Please try again later.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Reviews API: http://localhost:${PORT}/api/reviews`);
  console.log(`Contact API: http://localhost:${PORT}/api/contact`);
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('⚠️  Email service not configured. Set EMAIL_USER and EMAIL_PASS in .env file to enable email notifications.');
  }
});

