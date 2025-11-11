import { NextRequest, NextResponse } from 'next/server'

// This endpoint will integrate with Google Calendar via Replit's connector
export async function POST(request: NextRequest) {
  try {
    const { date, time } = await request.json()

    if (!date || !time) {
      return NextResponse.json(
        { error: 'Date and time are required' },
        { status: 400 }
      )
    }

    // Parse the date and time
    const appointmentDate = new Date(date)
    const [hours, minutes] = time.split(':').map(Number)
    
    // Set the start time
    const startDateTime = new Date(appointmentDate)
    startDateTime.setHours(hours, minutes, 0, 0)
    
    // Set end time (30 minutes later for Growth Mapping Call)
    const endDateTime = new Date(startDateTime)
    endDateTime.setMinutes(endDateTime.getMinutes() + 30)

    // Google Calendar event details
    const event = {
      summary: 'Growth Mapping Call - Infusino',
      description: 'Free 30-minute consultation with our AI growth experts',
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/New_York', // Adjust to your timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York', // Adjust to your timezone
      },
      attendees: [
        // Add attendee email from form submission if needed
        // { email: 'client@example.com' }
      ],
      reminders: {
        useDefault: false,
        overrides: [
          { method: 'email', minutes: 24 * 60 }, // 1 day before
          { method: 'popup', minutes: 30 }, // 30 minutes before
        ],
      },
    }

    // When using Replit's Google Calendar connector, you'll access it via environment variables
    // The connector should provide a way to create calendar events
    
    // For Replit's connector, you typically use their API like this:
    // const calendarApiUrl = process.env.GOOGLE_CALENDAR_API_URL
    // const apiKey = process.env.GOOGLE_CALENDAR_API_KEY
    
    // Example integration with Replit connector:
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'
    const accessToken = process.env.GOOGLE_CALENDAR_ACCESS_TOKEN
    
    if (!accessToken) {
      console.error('Google Calendar access token not configured')
      return NextResponse.json(
        { error: 'Calendar integration not configured. Please set up the Google Calendar connector in Replit.' },
        { status: 500 }
      )
    }

    // Make request to Google Calendar API
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      }
    )

    if (!response.ok) {
      const errorData = await response.json()
      console.error('Google Calendar API error:', errorData)
      return NextResponse.json(
        { error: 'Failed to create calendar event', details: errorData },
        { status: response.status }
      )
    }

    const createdEvent = await response.json()

    // Optionally send confirmation email here
    // You can integrate with SendGrid, Resend, or another email service

    return NextResponse.json({
      success: true,
      eventId: createdEvent.id,
      eventLink: createdEvent.htmlLink,
      message: 'Appointment booked successfully',
    })
  } catch (error) {
    console.error('Error booking appointment:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

// Optional: GET endpoint to check available time slots
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const date = searchParams.get('date')

    if (!date) {
      return NextResponse.json(
        { error: 'Date parameter is required' },
        { status: 400 }
      )
    }

    const accessToken = process.env.GOOGLE_CALENDAR_ACCESS_TOKEN
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

    if (!accessToken) {
      return NextResponse.json(
        { error: 'Calendar integration not configured' },
        { status: 500 }
      )
    }

    // Get events for the specified date to check availability
    const selectedDate = new Date(date)
    const startOfDay = new Date(selectedDate)
    startOfDay.setHours(0, 0, 0, 0)
    
    const endOfDay = new Date(selectedDate)
    endOfDay.setHours(23, 59, 59, 999)

    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?timeMin=${startOfDay.toISOString()}&timeMax=${endOfDay.toISOString()}&singleEvents=true`,
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
        },
      }
    )

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch calendar events' },
        { status: response.status }
      )
    }

    const data = await response.json()
    const bookedSlots = data.items?.map((event: any) => ({
      start: event.start.dateTime,
      end: event.end.dateTime,
    })) || []

    return NextResponse.json({
      success: true,
      bookedSlots,
    })
  } catch (error) {
    console.error('Error fetching available slots:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

