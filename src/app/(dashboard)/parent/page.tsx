import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT: Schedule */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-md shadow-sm">
          <h1 className="text-xl font-semibold mb-4">Schedule (John Doe)</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT: Announcements */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
