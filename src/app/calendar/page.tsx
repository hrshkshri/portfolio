import Calendar from "@/components/calendar/Calendar";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Schedule",
  path: "/calendar",
  description: "Book a time to talk with me.",
  socialTitle: "Schedule time with Harsh Keshari",
  socialDescription: "Pick a slot that works for you.",
});

export default function CalendarPage() {
  return <Calendar />;
}
