import axios from "axios";
import { useState } from "react";

const useGetOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrders = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/agency/orders/",
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setOrders(response?.data?.rentals);
    } catch (error) {
      // TODO: add toast notification
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getOrders, orders };
};
export default useGetOrders;
