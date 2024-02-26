import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetOrders from "../hooks/useGetOrders";
import OrderItem from "../components/Orders/OrderItem";
import PageTransition from "../Animations/PageTransition";
import OrderItemMobile from "../components/Orders/OrderItemMobile";

const Orders = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { loading, getOrders, orders } = useGetOrders();
  useEffect(() => {
    if (!user || !user?.isAgency) navigate("/", { replace: true });
    getOrders();
  }, [navigate, user]);

  return (
    <PageTransition className="max-w-7xl mx-auto px-3">
      <div className="flex flex-col min-h-[calc(100vh-60px)] ">
        <h2 className="text-3xl font-bold my-10">Orders</h2>
        <div className="flex-1 flex-col gap-4 hidden sm:flex">
          {orders.map((order) => (
            <OrderItem key={order._id} order={order} />
          ))}
        </div>
        <div className="flex-1 flex-col gap-4 flex sm:hidden">
          {orders.map((order) => (
            <OrderItemMobile key={order._id} order={order} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};
export default Orders;
