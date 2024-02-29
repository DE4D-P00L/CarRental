import axios from "axios";
import { useEffect, useState } from "react";
import useGetAllCars from "../hooks/useGetAllCars";
import Item from "../components/Inventory/Item";
import Select from "../components/Inventory/Select";
import DatePicker from "../components/Inventory/DatePicker";
import convertDate from "../utils/convertDate.js";
import toast from "react-hot-toast";
import PageTransition from "../Animations/PageTransition";
import payImg from "../assets/sell.png";
import { useSelector } from "react-redux";

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
    if (!user) return toast.error("Login required");
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + days);
    const { agencyId, _id, rent } = car;
    const totalPrice = rent * days;
    try {
      const {
        data: { key },
      } = await axios.get(import.meta.env.VITE_BACKEND_URL + "/payment/getKey");
      const {
        data: { order },
      } = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/payment/checkout",
        {
          amount: totalPrice,
        }
      );
      console.log(order);

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Wheelocity",
        description: "Rental Payment",
        image: payImg,
        order_id: order.id,
        handler: async function (res) {
          toast.success("Payment successful");
          const response = await axios.post(
            import.meta.env.VITE_BACKEND_URL + "/user/rent",
            {
              agencyId,
              carId: _id,
              startDate,
              endDate: convertDate(endDate),
              price: totalPrice,
              order_id: order.id,
            },
            { headers: { Authorization: localStorage.getItem("token") } }
          );
          if (!response.data.success)
            return toast.error(response.data?.message);
          getFilteredCars(convertDate(startDate), convertDate(endDate));
        },
        prefill: {
          name: `${user?.firstName} ${user?.lastName}`,
          email: user?.email,
          contact: user?.phone,
        },
        notes: {
          address: user?.address,
        },
        theme: {
          color: "#3399cc",
        },
        config: {
          display: {
            blocks: {
              banks: {
                name: "Most Used Methods",
                instruments: [
                  {
                    method: "upi",
                  },
                ],
              },
            },
            sequence: ["block.banks"],
            preferences: {
              show_default_blocks: true,
            },
          },
        },
      };

      const razor = new window.Razorpay(options);
      razor.on("payment.failed", () => {
        toast.error("Payment Failed");
      });
      razor.open();

      // const response = await axios.post(
      //   import.meta.env.VITE_BACKEND_URL + "/user/rent",
      //   {
      //     agencyId,
      //     carId: _id,
      //     startDate,
      //     endDate: convertDate(endDate),
      //     price: totalPrice,
      //     order_id: order.id,
      //   },
      //   { headers: { Authorization: localStorage.getItem("token") } }
      // );
      // toast.success(
      //   "Rented successfully, Total Price: " + response.data.rental.price
      // );
      // if (response.data.success) {
      //   getFilteredCars(convertDate(startDate), convertDate(endDate));
      // }
    } catch (error) {
      toast.error("Please login first");
      console.log(error.message);
    }
  };

  return (
    <PageTransition className="max-w-7xl mx-auto px-2">
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
        {loading && (
          <h2 className="flex items-center">
            <span className="loading loading-ring loading-md"></span>Loading
          </h2>
        )}
      </div>
    </PageTransition>
  );
};
export default Inventory;
