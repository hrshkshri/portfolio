import Calendar from "@/components/calendar/Calendar";
import { pageMetadata } from "@/lib/metadata";
import StructuredData from "@/components/shared/StructuredData";
import { pageSchema } from "@/lib/schema";

export const metadata = pageMetadata({
  title: "Schedule",
  path: "/calendar",
  description: "Book a time to talk with me.",
  socialTitle: "Schedule time with Harsh Keshari",
  socialDescription: "Pick a slot that works for you.",
  // A utility page, not a profile.
  type: "website",
});

export default function CalendarPage() {
  return (
    <>
      <StructuredData data={pageSchema("Schedule", "/calendar")} />
      <Calendar />
    </>
  );
}
