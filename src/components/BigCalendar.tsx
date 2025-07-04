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

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={safeEvents}
      startAccessor="start"
      endAccessor="end"
      defaultView={Views.WORK_WEEK}
      views={{ work_week: true, day: true }}
      view={view}
      onView={handleOnChangeView}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
      style={{ height: "90%" }}
    />
  );
};

export default BigCalendar;
