# Google Calendar Integration Setup Guide

This guide will help you set up Google Calendar integration for the appointment booking system using Replit's Google Calendar connector.

## Prerequisites

- Replit account with your project deployed
- Google account for calendar management
- Access to Replit's integrations/connectors

## Setup Steps

### 1. Enable Google Calendar Connector in Replit

1. Go to your Replit project
2. Navigate to the "Secrets" or "Integrations" section
3. Find and enable the **Google Calendar** connector
4. Click "Connect to Google Calendar"
5. Authorize Replit to access your Google Calendar

### 2. Configure Environment Variables

After connecting, Replit will automatically provide these environment variables. If not, add them manually in the Secrets tab:

```env
GOOGLE_CALENDAR_ACCESS_TOKEN=<provided_by_replit>
GOOGLE_CALENDAR_REFRESH_TOKEN=<provided_by_replit>
GOOGLE_CALENDAR_ID=primary
GOOGLE_CLIENT_ID=<from_google_cloud_console>
GOOGLE_CLIENT_SECRET=<from_google_cloud_console>
```

### 3. Google Cloud Console Setup (if needed)

If Replit doesn't provide automatic setup:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the **Google Calendar API**
4. Create OAuth 2.0 credentials:
   - Application type: Web application
   - Authorized redirect URIs: Add your Replit domain
5. Copy the Client ID and Client Secret
6. Add these to Replit's secrets

### 4. Calendar Configuration

The system is configured to:
- **Business Hours**: 7:00 AM - 7:00 PM
- **Available Days**: Monday - Saturday
- **Sundays**: Always disabled
- **Meeting Duration**: 30 minutes
- **Timezone**: America/New_York (update in `/app/api/book-appointment/route.ts` if needed)

### 5. Customize the API Endpoint

Edit `/app/api/book-appointment/route.ts` to customize:

- **Timezone**: Change `timeZone: 'America/New_York'` to your timezone
- **Meeting Duration**: Adjust the end time calculation
- **Calendar ID**: Use specific calendar instead of 'primary'
- **Event Details**: Customize summary, description, reminders

### 6. Testing

1. Navigate to `/book` on your website
2. Select a date (Monday-Saturday, not Sunday)
3. Choose a time slot (7:00 AM - 7:00 PM)
4. Click "Continue"
5. Check your Google Calendar for the created event

### 7. Troubleshooting

**Error: "Calendar integration not configured"**
- Ensure `GOOGLE_CALENDAR_ACCESS_TOKEN` is set in Replit secrets
- Check that the Google Calendar connector is properly connected

**Error: "Failed to create calendar event"**
- Verify the access token hasn't expired
- Check Google Calendar API is enabled
- Review API quota limits in Google Cloud Console

**Sundays are not disabled**
- Clear browser cache and refresh
- Check browser console for JavaScript errors

## Optional Enhancements

### Email Notifications

To send confirmation emails after booking:

1. Sign up for [SendGrid](https://sendgrid.com/) or [Resend](https://resend.com/)
2. Add API key to Replit secrets: `SENDGRID_API_KEY`
3. Update the API endpoint to send emails after successful booking

### Availability Checking

The API includes a GET endpoint to check booked time slots:

```javascript
fetch(`/api/book-appointment?date=2025-06-20`)
  .then(res => res.json())
  .then(data => console.log(data.bookedSlots))
```

Use this to hide already booked time slots in the UI.

## Calendar ID

To use a specific calendar instead of 'primary':

1. Open Google Calendar
2. Go to calendar settings
3. Copy the Calendar ID
4. Set `GOOGLE_CALENDAR_ID` environment variable

## Security Notes

- Never commit `.env` files with real credentials
- Use Replit's Secrets feature for all sensitive data
- Regularly rotate access tokens
- Limit API scopes to calendar access only

## Support

For issues with:
- **Replit Integration**: Check Replit documentation
- **Google Calendar API**: Check [Google Calendar API docs](https://developers.google.com/calendar/api)
- **This App**: Check the console logs in browser and server

---

**Last Updated**: November 2025
**App Version**: 1.0

