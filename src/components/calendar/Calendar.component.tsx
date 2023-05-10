interface CalendarProps {
  selectedMonth: string;
  handleMonthChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Calendar = (calendarProps: CalendarProps) => {
  const { selectedMonth, handleMonthChange } = calendarProps;
  return (
    <div className="flex items-center mt-2 mb-3 space-x-4">
      <label htmlFor="start" className="mb-2 font-bold text-gray-700">
        Reporting month:
      </label>
      <input
        type="month"
        id="start"
        name="start"
        className="px-3 py-2 border border-gray-400 rounded-lg"
        min="2020-01"
        value={selectedMonth}
        onChange={handleMonthChange}
      />
    </div>
  );
};

export default Calendar;
