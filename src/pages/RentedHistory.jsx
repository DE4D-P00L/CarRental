import { useSelector } from "react-redux";
import OrderItem from "../components/History/OrderItem";
import { useNavigate } from "react-router-dom";
import useGetOrderHistory from "../hooks/useGetOrderHistory";
import { useEffect } from "react";

const RentedHistory = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { loading, getOrderHistory, orders } = useGetOrderHistory();
  useEffect(() => {
    if (!user) navigate("/", { replace: true });
    getOrderHistory();
  }, [navigate, user]);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col min-h-[calc(100vh-60px)]">
        <h2 className="text-3xl font-bold my-10">Rental History</h2>
        <div className="flex-1 flex flex-col gap-4">
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default RentedHistory;
