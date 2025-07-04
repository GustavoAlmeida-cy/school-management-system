import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";
import React from "react";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        {/* User cards */}
        <div className="flex gap-4 justify-between">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
        {/* Middle charts */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* Count chart */}
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart />
          </div>
          {/* Attendance chart */}
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        {/* Bottom charts */}
        <div></div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
