import axios from "axios";
import { useState } from "react";

const useGetOrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const getOrderHistory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        import.meta.env.VITE_BACKEND_URL + "/user/order-history",
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      setOrders(response?.data?.rentals);
    } catch (error) {
      // TODO: add toast notification
      // console.log(error.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, getOrderHistory, orders };
};
export default useGetOrderHistory;
