import { NextResponse } from 'next/server';
import { getCalendarEvents } from '@/lib/google-calendar';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const startDate = searchParams.get('startDate');
    const endDate = searchParams.get('endDate');

    if (!startDate || !endDate) {
      return NextResponse.json(
        { error: 'startDate and endDate are required' },
        { status: 400 }
      );
    }

    const events = await getCalendarEvents(
      'primary',
      new Date(startDate),
      new Date(endDate)
    );

    const bookedSlots = events.map((event: any) => ({
      start: event.start?.dateTime || event.start?.date,
      end: event.end?.dateTime || event.end?.date,
      summary: event.summary,
    }));

    return NextResponse.json({ bookedSlots });
  } catch (error) {
    console.error('Error fetching calendar availability:', error);
    return NextResponse.json(
      { error: 'Failed to fetch calendar availability' },
      { status: 500 }
    );
  }
}
