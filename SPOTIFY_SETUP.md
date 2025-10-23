# Spotify Integration Setup Guide 🎵

Follow these steps to connect your Spotify account and show live music on your portfolio!

## Step 1: Create a Spotify App

1. Go to [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)
2. Log in with your Spotify account
3. Click **"Create App"**
4. Fill in the details:
   - **App Name**: Your Portfolio (or any name you like)
   - **App Description**: Shows my currently playing music
   - **Redirect URI**: `http://localhost:3000/api/spotify/callback` (add your production URL later)
   - Check the terms of service box
5. Click **"Save"**
6. You'll now see your **Client ID** and **Client Secret** - keep these safe!

## Step 2: Get Your Environment Variables

Add these to your `.env.local` file:

```env
SPOTIFY_CLIENT_ID=your_client_id_here
SPOTIFY_CLIENT_SECRET=your_client_secret_here
SPOTIFY_REFRESH_TOKEN=get_this_in_next_step
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Step 3: Get Your Refresh Token

1. Replace `YOUR_CLIENT_ID` in this URL with your actual Client ID:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http://localhost:3000/api/spotify/callback&scope=user-read-currently-playing%20user-read-recently-played
```

2. Open this URL in your browser
3. You'll be asked to authorize the app - click **"Agree"**
4. You'll be redirected to a page showing JSON with your tokens
5. Copy the `refresh_token` value and add it to your `.env.local` file

## Step 4: Test Your Integration

1. Start your development server: `npm run dev`
2. Play a song on Spotify (any device with your account)
3. Visit `http://localhost:3000/spotify`
4. You should see your currently playing song! 🎉

## Production Setup

When deploying to production:

1. Add your production URL to Spotify App Redirect URIs:
   - Go to your app settings in Spotify Dashboard
   - Add: `https://yourdomain.com/api/spotify/callback`
   
2. Update your environment variables on your hosting platform:
   - Add all the `SPOTIFY_*` variables
   - Update `NEXT_PUBLIC_BASE_URL` to your production URL

## Troubleshooting

**Nothing showing?**
- Make sure Spotify is actually playing music
- Check that all environment variables are set correctly
- Try restarting your dev server

**"401 Unauthorized" error?**
- Your refresh token might be expired
- Go through Step 3 again to get a new token

**Still not working?**
- Check the browser console for errors
- Make sure your Spotify app has the correct scopes
- Verify the redirect URI matches exactly (including http/https)

## Features

✅ Shows currently playing track  
✅ Shows recently played if nothing is playing  
✅ Updates every 5 seconds automatically  
✅ Shows album art, artist, and song info  
✅ Links to open song in Spotify  
✅ Cool Gen-Z vibed design!  

---

Need help? Check the [Spotify Web API docs](https://developer.spotify.com/documentation/web-api)
