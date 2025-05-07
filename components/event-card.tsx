// edit UI here !!!

import Link from "next/link";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Event {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  imageUrl: string;
  category: string;
}

export function EventCard({ event }: { event: Event }) {
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
  const formattedTime = eventDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit"
  });

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={event.imageUrl}
          alt={event.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold bg-blue-100 text-blue-800 rounded-full mb-2">
          {event.category}
        </span>
        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <CalendarDays className="h-4 w-4" />
          <span>
            {formattedDate} at {formattedTime}
          </span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
          <MapPin className="h-4 w-4" />
          <span>{event.location}</span>
        </div>
        <Button asChild className="w-full">
          <Link href={`/events/${event.id}`}>View Details</Link>
        </Button>
      </div>
    </div>
  );
}