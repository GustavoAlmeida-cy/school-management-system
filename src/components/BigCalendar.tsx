"use client";

import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const safeEvents = (calendarEvents ?? []).filter(
    (event) =>
      event &&
      typeof event.title === "string" &&
      event.start instanceof Date &&
      event.end instanceof Date
  );

  const [view, setView] = useState<View>(Views.WORK_WEEK);

  return (
    <Calendar
      localizer={localizer}
      events={safeEvents}
      startAccessor="start"
      endAccessor="end"
      defaultView={Views.WORK_WEEK}
      view={view}
      views={[Views.WORK_WEEK, Views.DAY]}
      onView={setView}
      defaultDate={new Date(2024, 7, 12)} // 12 de agosto de 2024
      min={new Date(2024, 7, 12, 8, 0)}
      max={new Date(2024, 7, 12, 17, 0)}
      style={{ height: "90vh" }}
    />
  );
};

export default BigCalendar;
