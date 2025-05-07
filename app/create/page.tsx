// edit UI here !!!

import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { EventForm } from '@/components/event-form';

export default async function CreateEventPage() {
  const { userId } = await auth(); // Await the promise to get the resolved value

  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Create New Event</h1>
      <EventForm />
    </div>
  );
}