'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CircleCheckIcon, ArrowLeft } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function BookAppointment() {
  const [date, setDate] = useState<Date | undefined>(new Date(2025, 5, 20))
  const [selectedTime, setSelectedTime] = useState<string | null>('10:00')

  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
  })

  const bookedDates = Array.from({ length: 3 }, (_, i) => new Date(2025, 5, 17 + i))

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
            Schedule Your Growth Mapping Call
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            Book a free 30-minute consultation with our AI growth experts
          </p>
        </div>

        <Card className='gap-0 p-0'>
          <CardHeader className='flex h-max justify-center border-b !p-4'>
            <CardTitle>Book your appointment</CardTitle>
          </CardHeader>
          <CardContent className='relative p-0 md:pr-48'>
            <div className='p-6'>
              <Calendar
                mode='single'
                selected={date}
                onSelect={setDate}
                defaultMonth={date}
                disabled={bookedDates}
                showOutsideDays={false}
                modifiers={{
                  booked: bookedDates
                }}
                modifiersClassNames={{
                  booked: '[&>button]:line-through opacity-100'
                }}
                className='bg-transparent p-0 [--cell-size:--spacing(10)]'
                formatters={{
                  formatWeekdayName: date => {
                    return date.toLocaleString('en-US', { weekday: 'short' })
                  }
                }}
              />
            </div>
            <div className='inset-y-0 right-0 flex w-full flex-col gap-4 border-t max-md:h-60 md:absolute md:w-48 md:border-t-0 md:border-l'>
              <ScrollArea className='h-full'>
                <div className='flex flex-col gap-2 p-6'>
                  {timeSlots.map(time => (
                    <Button
                      key={time}
                      variant={selectedTime === time ? 'default' : 'outline'}
                      onClick={() => setSelectedTime(time)}
                      className='w-full shadow-none'
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </CardContent>
          <CardFooter className='flex flex-col gap-4 border-t px-6 !py-5 md:flex-row'>
            <div className='flex items-center gap-2 text-sm'>
              {date && selectedTime ? (
                <>
                  <CircleCheckIcon className='size-5 stroke-green-600 dark:stroke-green-400' />
                  <span>
                    Your meeting is booked for{' '}
                    <span className='font-medium'>
                      {' '}
                      {date?.toLocaleDateString('en-US', {
                        weekday: 'long',
                        day: 'numeric',
                        month: 'long'
                      })}{' '}
                    </span>
                    at <span className='font-medium'>{selectedTime}</span>.
                  </span>
                </>
              ) : (
                <>Select a date and time for your meeting.</>
              )}
            </div>
            <Button disabled={!date || !selectedTime} className='w-full md:ml-auto md:w-auto' variant='outline'>
              Continue
            </Button>
          </CardFooter>
        </Card>
        <p className='text-muted-foreground mt-4 text-center text-xs' role='region'>
          Appointment calendar
        </p>
      </div>
    </div>
  )
}
