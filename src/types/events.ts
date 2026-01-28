/**
 * Event-related type definitions for the Vibe Code Detroit application.
 */

export interface EventVenue {
  address: string;
  city: string;
  name: string;
  state: string;
}

export interface EventGroup {
  name: string;
}

export interface MeetupEvent {
  id: number;
  eventId: string;
  title: string;
  description: string;
  dateTime: string;
  venue: EventVenue | null;
  eventUrl: string;
  group: EventGroup;
}

export interface EventsApiResponse {
  events: MeetupEvent[];
  error?: string;
}

/**
 * Terms used for filtering vibe coding events
 */
export const EVENT_FILTER_TERMS = {
  primary: ["vibe code", "vibe coding", "vibecode"],
  coding: [
    "coding",
    "programming",
    "developer",
    "software development",
    "hackathon",
    "code along",
    "web development",
    "app development",
  ],
  techGroup: ["code", "developer", "programming", "tech", "software", "hacker"],
} as const;

/**
 * Check if an event matches vibe coding criteria
 */
export function isVibeCodingEvent(event: MeetupEvent): boolean {
  const titleLower = event.title.toLowerCase();
  const descLower = event.description.toLowerCase();
  const groupLower = event.group?.name?.toLowerCase() || "";

  const isPrimaryMatch = EVENT_FILTER_TERMS.primary.some(
    (term) =>
      titleLower.includes(term) ||
      descLower.includes(term) ||
      groupLower.includes(term),
  );

  const isCodingEvent = EVENT_FILTER_TERMS.coding.some(
    (term) => titleLower.includes(term) || descLower.includes(term),
  );

  const isFromTechGroup = EVENT_FILTER_TERMS.techGroup.some((term) =>
    groupLower.includes(term),
  );

  return isPrimaryMatch || isCodingEvent || isFromTechGroup;
}

/**
 * Format event date for display
 */
export function formatEventDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZoneName: "short",
  });
}
