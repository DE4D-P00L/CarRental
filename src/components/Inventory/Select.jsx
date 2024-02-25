const Select = ({ handleDaysChange, value }) => {
  return (
    <label>
      For Days
      <select
        onChange={handleDaysChange}
        value={value}
        className="flex w-[150px] px-1 py-1.5 rounded-md">
        <option value="1">1 day</option>
        <option value="2">2 days</option>
        <option value="3">3 days</option>
        <option value="4">4 days</option>
        <option value="5">5 days</option>
        <option value="6">6 days</option>
        <option value="7">A week</option>
      </select>
    </label>
  );
};
export default Select;
