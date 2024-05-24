import React, { useState } from "react";

const AgeCalculator = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [age, setAge] = useState({ years: "--", months: "--", days: "--" });
  const [errors, setErrors] = useState({
    day: false,
    month: false,
    year: false,
  });

  const handleDayChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setDay(newValue);
      setErrors({ ...errors, day: false });
    }
  };

  const handleMonthChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setMonth(newValue);
      setErrors({ ...errors, month: false });
    }
  };

  const handleYearChange = (e) => {
    const newValue = e.target.value;
    if (/^\d*$/.test(newValue)) {
      setYear(newValue);
      setErrors({ ...errors, year: false });
    }
  };

  const calculateAge = (e) => {
    e.preventDefault();

    const today = new Date();
    const birthYear = parseInt(year);
    const birthMonth = parseInt(month);
    const birthDay = parseInt(day);

    const isDayValid = birthDay > 0 && birthDay <= 31;
    const isMonthValid = birthMonth > 0 && birthMonth <= 12;
    const isYearValid = birthYear > 0 && birthYear <= today.getFullYear();

    if (!isDayValid || !isMonthValid || !isYearValid) {
      setErrors({
        day: !isDayValid,
        month: !isMonthValid,
        year: !isYearValid,
      });
      return;
    }

    const birthDate = new Date(`${year}-${month}-${day}`);
    if (birthDate > today) {
      alert("The birth date cannot be in the future");
      return;
    }

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    setAge({ years: ageYears, months: ageMonths, days: ageDays });
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center p-10">
      <div className="flex h-full w-full items-center justify-center rounded-xl bg-blue-200 shadow-2xl">
        <div className="h-[500px] w-[800px] rounded-2xl rounded-br-[150px] bg-white p-10 shadow-2xl">
          <form className="mb-10 flex gap-6" onSubmit={calculateAge}>
            <div className="flex flex-col">
              <label
                htmlFor="day"
                className="mb-2 text-[20px] font-semibold text-neutral-600"
              >
                DAY:
              </label>
              <input
                required
                value={day}
                onChange={handleDayChange}
                type="text"
                id="day"
                placeholder="DD"
                className={`h-14 w-[150px] rounded-lg border ${errors.day ? "border-red-500" : "border-gray-300"} px-3 py-2 text-[24px] font-semibold placeholder:text-[24px] placeholder:font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="month"
                className="mb-2 text-[20px] font-semibold text-neutral-600"
              >
                MONTH:
              </label>
              <input
                required
                value={month}
                onChange={handleMonthChange}
                type="text"
                id="month"
                placeholder="MM"
                className={`h-14 w-[150px] rounded-lg border ${errors.month ? "border-red-500" : "border-gray-300"} px-3 py-2 text-[24px] font-semibold placeholder:text-[24px] placeholder:font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="year"
                className="mb-2 text-[20px] font-semibold text-neutral-600"
              >
                YEAR:
              </label>
              <input
                required
                value={year}
                onChange={handleYearChange}
                type="text"
                id="year"
                placeholder="YYYY"
                className={`h-14 w-[150px] rounded-lg border ${errors.year ? "border-red-500" : "border-gray-300"} px-3 py-2 text-[24px] font-semibold placeholder:text-[24px] placeholder:font-bold placeholder:text-neutral-500 focus:outline-none focus:ring-1 focus:ring-blue-500`}
              />
            </div>
          </form>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={calculateAge}
              className="rounded-md bg-violet-500 px-4 py-2 text-white hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Calculate Age
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-left text-[60px] font-extrabold italic leading-[120%]">
              <span className="text text-violet-700">{age.years}</span> years
            </p>
            <p className="text-left text-[60px] font-extrabold italic leading-[120%]">
              <span className="text text-violet-700">{age.months}</span> months
            </p>
            <p className="text-left text-[60px] font-extrabold italic leading-[120%]">
              <span className="text text-violet-700">{age.days}</span> days
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
