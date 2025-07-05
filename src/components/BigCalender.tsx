"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  // Data inicial para o calendário (hoje ou data fixa)
  const initialDate = new Date(2024, 7, 12); // 12 ago 2024

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={[Views.WORK_WEEK, Views.DAY]}
      view={view}
      onView={handleOnChangeView}
      style={{ height: "98%" }}
      defaultDate={initialDate}
      min={
        new Date(
          initialDate.getFullYear(),
          initialDate.getMonth(),
          initialDate.getDate(),
          8
        )
      } // 08:00 do dia inicial
      max={
        new Date(
          initialDate.getFullYear(),
          initialDate.getMonth(),
          initialDate.getDate(),
          17
        )
      } // 17:00 do mesmo dia (exibe horário do expediente)
    />
  );
};

export default BigCalendar;
