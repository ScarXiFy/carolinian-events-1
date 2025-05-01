import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/event-card";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  // Mock data - replace with real data from your database
  const featuredEvents = [
    {
      id: "1",
      title: "Campus Welcome Party",
      description: "Kickoff event for new students",
      location: "Student Union Building",
      date: "2023-09-15T18:00:00",
      imageUrl: "/images/event1.jpg",
      category: "Social"
    },
    {
      id: "2",
      title: "CS Career Fair",
      description: "Meet top tech companies",
      location: "Engineering Building",
      date: "2023-09-20T10:00:00",
      imageUrl: "/images/event2.jpg",
      category: "Career"
    },
    {
      id: "3",
      title: "Basketball Tournament",
      description: "Intramural sports competition",
      location: "University Gym",
      date: "2023-09-25T14:00:00",
      imageUrl: "/images/event3.jpg",
      category: "Sports"
    }
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Campus Events
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Find and create events happening around our university
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/events">Browse Events</Link>
            </Button>
            {userId && (
              <Button asChild variant="secondary" size="lg">
                <Link href="/create">Create Event</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}