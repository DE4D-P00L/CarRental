const DatePicker = ({ handleDateChange, value, min }) => {
  return (
    <label className="flex flex-col">
      From Date
      <input
        onChange={handleDateChange}
        type="date"
        value={value}
        min={min}
        className="px-2 rounded-md flex-1 py-1"
      />
    </label>
  );
};
export default DatePicker;
