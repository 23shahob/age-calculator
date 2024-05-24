import React, { useState } from "react";
// import { classNames } from "tailwindcss/tailwind.config";
import classNames from "classnames";

function DatePicker() {
  const [selectedDate, setSelectedDate] = useState({
    day: "",
    month: "",
    year: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedDate({ ...selectedDate, [name]: value });
  };

  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="flex flex-col">
        <label htmlFor="day">Day</label>
        <input
          type="text"
          name="day"
          id="day"
          value={selectedDate.day}
          onChange={handleChange}
          className={classNames("rounded-md border border-gray-300 px-3 py-2", {
            "border-red-500": !selectedDate.day,
          })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="month">Month</label>
        <input
          type="text"
          name="month"
          id="month"
          value={selectedDate.month}
          onChange={handleChange}
          className={classNames("rounded-md border border-gray-300 px-3 py-2", {
            "border-red-500": !selectedDate.month,
          })}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="year">Year</label>
        <input
          type="text"
          name="year"
          id="year"
          value={selectedDate.year}
          onChange={handleChange}
          className={classNames("rounded-md border border-gray-300 px-3 py-2", {
            "border-red-500": !selectedDate.year,
          })}
        />
      </div>
    </div>
  );
}

export default DatePicker;
