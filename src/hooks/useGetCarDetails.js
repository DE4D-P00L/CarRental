import axios from "axios";
import { useState } from "react";

const useGetCarDetails = () => {
  const [car, setCar] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCar = async (id) => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/car/" + id
      );
      setCar(response?.data?.car);
    } catch (error) {
      // TODO: add toast notification
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, getCar, car };
};
export default useGetCarDetails;
