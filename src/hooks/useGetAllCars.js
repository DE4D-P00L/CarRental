import axios from "axios";
import { useState } from "react";

const useGetAllCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCars = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/car/"
      );
      setCars(response?.data?.cars);
    } catch (error) {
      // TODO: add toast notification
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredCars = async (startDate, endDate) => {
    try {
      setLoading(true);
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/car/filter",
        { startDate, endDate }
      );
      setCars(response?.data?.cars);
    } catch (error) {
      // TODO: add toast notification
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getCars, getFilteredCars, cars };
};
export default useGetAllCars;
