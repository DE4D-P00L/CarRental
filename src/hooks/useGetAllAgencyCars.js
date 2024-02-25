import axios from "axios";
import { useState } from "react";

const useGetAllAgencyCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCars = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/agency/all-cars/",
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setCars(response?.data?.cars);
    } catch (error) {
      // TODO: add toast notification
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getCars, cars };
};
export default useGetAllAgencyCars;
