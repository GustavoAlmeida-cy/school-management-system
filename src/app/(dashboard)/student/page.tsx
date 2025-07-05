import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import EventCalendar from "@/components/EventCalendar";

const StudentPage = () => {
  return (
    <div className="p-4 flex flex-col xl:flex-row gap-4">
      {/* LEFT: Schedule */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md shadow-sm">
          <h1 className="text-xl font-semibold mb-4">Schedule (4A)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT: Events and Announcements */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
