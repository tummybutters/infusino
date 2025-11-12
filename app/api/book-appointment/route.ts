import { NextRequest, NextResponse } from 'next/server'
import { createCalendarEvent } from '@/lib/google-calendar'

// This endpoint integrates with Google Calendar via Replit's connector
export async function POST(request: NextRequest) {
  try {
    const { date, time, email, intention } = await request.json()

    if (!date || !time || !email || !intention) {
      return NextResponse.json(
        { error: 'Date, time, email, and intention are required' },
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

    // Map intention to readable text
    const intentionMap: { [key: string]: string } = {
      'new-business': 'New Business Inquiry',
      'grow-sales': 'Looking to Grow Sales',
      'ai-automation': 'AI & Automation Solutions',
      'consultation': 'General Consultation',
      'partnership': 'Partnership Opportunity',
      'other': 'Other'
    }

    // Google Calendar event details with professional description
    const event = {
      summary: 'Growth Mapping Call - Qortana',
      description: `Hi there,

Looking forward to our Growth Mapping Call. This 30-minute session is designed to understand your business and identify opportunities for automation and growth.

What We'll Cover:
• Your current business operations and daily workflows
• Key areas where automation could save time and increase efficiency
• Growth strategies tailored to your specific needs
• Next steps for implementing AI solutions

To Get the Most From Our Call:
Take a few minutes before our meeting to think about:
- Daily tasks you wish could be automated
- Current bottlenecks in your business processes
- An overview of the different parts of your business

Purpose: ${intentionMap[intention] || intention}

---
Tommy Butcher
Founder, Qortana
Email: thomasbutcher@qortana.com
Phone: (949) 395-1074

We're here to help you scale smarter.`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/New_York', // Adjust to your timezone
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York', // Adjust to your timezone
      },
      attendees: [
        { email: email }
      ],
      organizer: {
        email: 'thomasbutcher@qortana.com',
        displayName: 'Tommy Butcher - Qortana'
      }
    }

    // Use Replit's Google Calendar connector
    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'
    
    // Create the calendar event using the proper Replit connector
    const createdEvent = await createCalendarEvent(calendarId, event)

    // Note: Email notifications will be sent automatically by Google Calendar
    // to the attendees (customer email) with the calendar invite

    return NextResponse.json({
      success: true,
      eventId: createdEvent.id,
      eventLink: createdEvent.htmlLink,
      message: 'Appointment booked successfully',
    })
  } catch (error) {
    console.error('Error booking appointment:', error)
    
    // Provide more helpful error messages
    let errorMessage = 'Internal server error'
    let errorDetails = error instanceof Error ? error.message : 'Unknown error'
    
    if (errorDetails.includes('Google Calendar not connected')) {
      errorMessage = 'Calendar integration not configured. Please set up the Google Calendar connector in Replit.'
    } else if (errorDetails.includes('X_REPLIT_TOKEN not found')) {
      errorMessage = 'Replit environment not properly configured. Check REPL_IDENTITY or WEB_REPL_RENEWAL environment variables.'
    }
    
    return NextResponse.json(
      { error: errorMessage, details: errorDetails },
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

    const calendarId = process.env.GOOGLE_CALENDAR_ID || 'primary'

    // Get events for the specified date to check availability
    const selectedDate = new Date(date)
    const startOfDay = new Date(selectedDate)
    startOfDay.setHours(0, 0, 0, 0)
    
    const endOfDay = new Date(selectedDate)
    endOfDay.setHours(23, 59, 59, 999)

    const { getCalendarEvents } = await import('@/lib/google-calendar')
    const events = await getCalendarEvents(calendarId, startOfDay, endOfDay)

    // Filter only sales calls from the website (Growth Mapping Call events)
    const salesCallEvents = events.filter((event: any) => 
      event.summary?.includes('Growth Mapping Call') || 
      event.summary?.includes('Qortana')
    )

    const bookedSlots = salesCallEvents
      .filter((event: any) => event.start?.dateTime && event.end?.dateTime)
      .map((event: any) => ({
        start: event.start.dateTime,
        end: event.end.dateTime,
      }))

    return NextResponse.json({
      success: true,
      bookedSlots,
    })
  } catch (error) {
    console.error('Error fetching available slots:', error)
    return NextResponse.json(
      { error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    )
  }
}

