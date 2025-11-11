import { NextResponse } from 'next/server';
import { createCalendarEvent } from '@/lib/google-calendar';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { date, time, name, email } = body;

    if (!date || !time) {
      return NextResponse.json(
        { error: 'Date and time are required' },
        { status: 400 }
      );
    }

    const [hours, minutes] = time.split(':');
    const startDateTime = new Date(date);
    startDateTime.setHours(parseInt(hours), parseInt(minutes), 0, 0);

    const endDateTime = new Date(startDateTime);
    endDateTime.setMinutes(endDateTime.getMinutes() + 30);

    const event = {
      summary: `Growth Mapping Call${name ? ` with ${name}` : ''}`,
      description: `30-minute consultation call scheduled through Qortana website.${email ? `\n\nClient email: ${email}` : ''}`,
      start: {
        dateTime: startDateTime.toISOString(),
        timeZone: 'America/New_York',
      },
      end: {
        dateTime: endDateTime.toISOString(),
        timeZone: 'America/New_York',
      },
      attendees: email ? [{ email }] : [],
    };

    const createdEvent = await createCalendarEvent('primary', event);

    return NextResponse.json({
      success: true,
      eventId: createdEvent.id,
      htmlLink: createdEvent.htmlLink,
    });
  } catch (error) {
    console.error('Error creating calendar event:', error);
    return NextResponse.json(
      { error: 'Failed to create calendar event' },
      { status: 500 }
    );
  }
}
