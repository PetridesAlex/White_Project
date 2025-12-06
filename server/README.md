# Google Reviews API Server

This server fetches Google reviews using the Google Places API.

## Setup Instructions

### 1. Get Google API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the **Places API**:
   - Navigate to "APIs & Services" > "Library"
   - Search for "Places API"
   - Click "Enable"
4. Create credentials:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy your API key

### 2. Find Your Place ID

1. Go to [Google Place ID Finder](https://developers.google.com/maps/documentation/places/web-service/place-id)
2. Search for "White Tiger" and your location
3. Copy the Place ID from the result

### 3. Configure Environment Variables

1. Create a `.env` file in the `server` directory (or root directory):
   ```bash
   touch server/.env
   ```

2. Edit `server/.env` (or `.env` in root) and add your credentials:
   ```
   GOOGLE_API_KEY=your_google_api_key_here
   GOOGLE_PLACE_ID=your_place_id_here
   PORT=3001
   EMAIL_USER=whitetigerbypro@gmail.com
   EMAIL_PASS=your_gmail_app_password_here
   ```

### 3.1. Email Configuration (For Contact Form)

To enable email notifications when someone submits the contact form:

1. **Enable 2-Factor Authentication** on your Gmail account (whitetigerbypro@gmail.com)

2. **Generate an App Password**:
   - Go to your Google Account settings
   - Navigate to Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Add to `.env` file**:
   ```
   EMAIL_USER=whitetigerbypro@gmail.com
   EMAIL_PASS=your_16_character_app_password
   ```

**Note:** All contact form submissions will be sent to `whitetigerbypro@gmail.com`

### 4. Install Dependencies

```bash
npm install
```

### 5. Run the Server

```bash
# Run server once
npm run server

# Run server with auto-reload (development)
npm run dev:server
```

The server will start on `http://localhost:3001`

### 6. Test the API

Visit `http://localhost:3001/api/reviews` in your browser or use curl:

```bash
curl http://localhost:3001/api/reviews
```

## API Endpoints

### GET `/api/reviews`

Fetches Google reviews for the configured place.

**Response:**
```json
{
  "success": true,
  "reviews": [
    {
      "name": "John Doe",
      "rating": 5,
      "text": "Great place!",
      "date": "2 weeks ago",
      "profilePhoto": "https://...",
      "time": 1234567890
    }
  ],
  "placeName": "White Tiger",
  "averageRating": 4.8
}
```

### POST `/api/contact`

Sends contact form submission via email.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to visit!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

**Note:** Emails are sent to `whitetigerbypro@gmail.com`. Make sure `EMAIL_USER` and `EMAIL_PASS` are configured in your `.env` file.

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "API is running"
}
```

## Frontend Configuration

Make sure your frontend is configured to connect to the API. The Reviews component uses:

- Default: `http://localhost:3001/api/reviews`
- Or set `VITE_API_URL` in your `.env` file

## Troubleshooting

- **"API key not configured"**: Make sure your `.env` file exists and has `GOOGLE_API_KEY` set
- **"Failed to fetch reviews"**: Check that:
  - Places API is enabled in Google Cloud Console
  - Your API key has the correct permissions
  - Your Place ID is correct
- **CORS errors**: The server includes CORS middleware, but make sure your frontend URL is allowed

## Security Notes

- Never commit your `.env` file to version control
- Add `.env` to `.gitignore`
- Consider restricting your API key to specific IPs or domains in Google Cloud Console

