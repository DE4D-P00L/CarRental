import axios from "axios";
import { useEffect, useState } from "react";
import useGetAllCars from "../hooks/useGetAllCars";
import Item from "../components/Inventory/Item";
import Select from "../components/Inventory/Select";
import DatePicker from "../components/Inventory/DatePicker";
import convertDate from "../utils/convertDate.js";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const Inventory = () => {
  const [days, setDays] = useState(1);
  const nowDate = convertDate(new Date());
  const [startDate, setStartDate] = useState(nowDate);
  const { loading, getFilteredCars, cars } = useGetAllCars();
  const user = useSelector((state) => state.auth.user);

  useEffect(() => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);
    getFilteredCars(convertDate(startDate), convertDate(endDate));
  }, [days, startDate]);

  const handleDaysChange = (e) => {
    setDays(+e.target.value);
  };

  const handleDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const onRentCar = async (car) => {
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);
    const { agencyId, _id, rent } = car;
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/user/rent",
        {
          agencyId,
          carId: _id,
          startDate,
          endDate: convertDate(endDate),
          price: rent * days,
        },
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      toast.success(
        "Rented successfully, Total Price: " + response.data.rental.price
      );
    } catch (error) {
      toast.error("Please login first");
      console.log(error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-2">
      <h3 className="text-3xl font-semibold my-5">Rent a Car</h3>
      <div className="flex gap-5 items-center sm:flex-row flex-col my-5">
        <DatePicker
          handleDateChange={handleDateChange}
          value={startDate}
          min={nowDate}
        />
        <Select handleDaysChange={handleDaysChange} value={days} />
      </div>
      <div className="flex gap-3 flex-wrap justify-center">
        {!loading && cars.length === 0 && (
          <h2>No cars available on this day</h2>
        )}
        {!loading &&
          cars?.map((car) => (
            <Item key={car._id} car={car} onRentCar={onRentCar} />
          ))}
      </div>
    </div>
  );
};
export default Inventory;
