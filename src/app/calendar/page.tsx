import Calendar from "@/components/calendar/Calendar";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Schedule",
  path: "/calendar",
  description:
    "Schedule a meeting with Harsh Keshari. Book time for collaboration, consultations, or discussions about projects and opportunities.",
  socialTitle: "Schedule a Meeting | Harsh Keshari",
  socialDescription:
    "Book time with me for collaboration, consultations, or discussions about projects and opportunities.",
});

export default function CalendarPage() {
  return <Calendar />;
}
