import { useSelector } from "react-redux";
import OrderItem from "../components/History/OrderItem";
import OrderItemMobile from "../components/History/OrderItemMobile";
import { useNavigate } from "react-router-dom";
import useGetOrderHistory from "../hooks/useGetOrderHistory";
import { useEffect } from "react";
import PageTransition from "../Animations/PageTransition";

const RentedHistory = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { loading, getOrderHistory, orders } = useGetOrderHistory();
  useEffect(() => {
    if (!user) navigate("/", { replace: true });
    getOrderHistory();
  }, [navigate, user]);

  return (
    <PageTransition className="max-w-7xl mx-auto px-3">
      <div className="flex flex-col min-h-[calc(100vh-60px)]">
        <h2 className="text-3xl font-bold my-10">Rental History</h2>
        <div className="flex-1 flex-col gap-4 sm:flex hidden">
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
        <div className="flex-1 flex-col gap-4 sm:hidden flex">
          {orders.map((order) => (
            <OrderItemMobile key={order._id} order={order} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
export default RentedHistory;
