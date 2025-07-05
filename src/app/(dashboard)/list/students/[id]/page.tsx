import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Image from "next/image";
import Link from "next/link";

const MetricCard = ({
  iconSrc,
  iconAlt,
  value,
  label,
}: {
  iconSrc: string;
  iconAlt: string;
  value: string | number;
  label: string;
}) => (
  <div className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]">
    <Image
      src={iconSrc}
      alt={iconAlt}
      width={24}
      height={24}
      className="w-6 h-6"
    />
    <div>
      <h2 className="text-xl font-semibold">{value}</h2>
      <span className="text-sm text-gray-400">{label}</span>
    </div>
  </div>
);

const SingleStudentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <section
        className="w-full xl:w-2/3"
        aria-label="Student main information and schedule"
      >
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <article
            className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4"
            aria-label="Student information card"
          >
            <div className="w-2/3 flex items-center justify-center">
              <Image
                src="https://images.pexels.com/photos/5414817/pexels-photo-5414817.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Photo of Cameron Moran"
                width={144}
                height={144}
                className="w-36 h-36 rounded-full object-cover"
              />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">Cameron Moran</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/blood.png"
                    alt="Blood group icon"
                    width={14}
                    height={14}
                  />
                  <span>A+</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/date.png"
                    alt="Birthdate icon"
                    width={14}
                    height={14}
                  />
                  <span>January 2025</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/mail.png"
                    alt="Email icon"
                    width={14}
                    height={14}
                  />
                  <span>user@gmail.com</span>
                </div>
                <div className="w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2">
                  <Image
                    src="/phone.png"
                    alt="Phone icon"
                    width={14}
                    height={14}
                  />
                  <span>+1 234 567</span>
                </div>
              </div>
            </div>
          </article>
          {/* SMALL CARDS */}
          <div
            className="flex-1 flex gap-4 justify-between flex-wrap"
            aria-label="Student statistics"
          >
            <MetricCard
              iconSrc="/singleAttendance.png"
              iconAlt="Attendance icon"
              value="90%"
              label="Attendance"
            />
            <MetricCard
              iconSrc="/singleBranch.png"
              iconAlt="Grade icon"
              value="6th"
              label="Grade"
            />
            <MetricCard
              iconSrc="/singleLesson.png"
              iconAlt="Lessons icon"
              value="18"
              label="Lessons"
            />
            <MetricCard
              iconSrc="/singleClass.png"
              iconAlt="Class icon"
              value="6A"
              label="Class"
            />
          </div>
        </div>
        {/* BOTTOM */}
        <section
          className="mt-4 bg-white rounded-md p-4 h-[800px]"
          aria-label="Student schedule"
        >
          <h2 className="mb-4 font-semibold">Student&apos;s Schedule</h2>
          <BigCalendar />
        </section>
      </section>
      {/* RIGHT */}
      <aside
        className="w-full xl:w-1/3 flex flex-col gap-4"
        aria-label="Sidebar with shortcuts, performance and announcements"
      >
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-xl font-semibold">Shortcuts</h2>
          <nav
            className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500"
            aria-label="Student shortcuts navigation"
          >
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href="/"
              aria-label="Go to Student's Lessons"
            >
              Student&apos;s Lessons
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaPurpleLight"
              href="/"
              aria-label="Go to Student's Teachers"
            >
              Student&aposs Teachers
            </Link>
            <Link
              className="p-3 rounded-md bg-pink-50"
              href="/"
              aria-label="Go to Student's Exams"
            >
              Student&apos;s Exams
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaSkyLight"
              href="/"
              aria-label="Go to Student's Assignments"
            >
              Student&apos;s Assignments
            </Link>
            <Link
              className="p-3 rounded-md bg-lamaYellowLight"
              href="/"
              aria-label="Go to Student's Results"
            >
              Student&apos;s Results
            </Link>
          </nav>
        </div>
        <Performance />
        <Announcements />
      </aside>
    </div>
  );
};

export default SingleStudentPage;
