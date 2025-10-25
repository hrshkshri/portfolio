import Calendar from "@/components/calendar/Calendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
  description:
    "Schedule a meeting with Harsh Keshari. Book time for collaboration, consultations, or discussions about projects and opportunities.",
  openGraph: {
    title: "Schedule a Meeting | Harsh Keshari",
    description:
      "Book time with me for collaboration, consultations, or discussions about projects and opportunities.",
    url: "https://hrshkshri.me/calendar",
  },
  twitter: {
    title: "Schedule a Meeting | Harsh Keshari",
    description:
      "Book time with me for collaboration, consultations, or discussions about projects and opportunities.",
  },
};

export default function CalendarPage() {
  return <Calendar />;
}
