import { useState } from "react";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import carPlaceholder from "../../assets/car-placeholder.png";
import convertDateIST from "../../utils/convertDateToIST.js";

const OrderItemMobile = ({ order }) => {
  const { price, carId, customerId, startDate, endDate, order_id } = order;
  const { model, vehicleNumber, capacity, vehicleImage } = carId;
  const { firstName, lastName, email, phone, address } = customerId;

  const [showCustomerDetails, setShowCustomerDetails] = useState(false);
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [showRentDetails, setShowRentDetails] = useState(false);

  return (
    <div className="shadow-md rounded-md bg-base-200 flex gap-3 p-4 flex-col">
      <div className="max-h-[250px] p-2 flex justify-center">
        <img
          src={`${
            vehicleImage === "" || !vehicleImage ? carPlaceholder : vehicleImage
          }`}
          alt={model}
          className="rounded-md w-[250px] object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="flex justify-between text-left items-center"
          onClick={() => setShowCustomerDetails((prev) => !prev)}>
          <h2 className="text-xl mb-3">Customer Details</h2>
          <span>
            {!showCustomerDetails && <MdExpandMore />}
            {showCustomerDetails && <MdExpandLess />}
          </span>
        </button>
        <div className={`${showCustomerDetails ? "block" : "hidden"}`}>
          <h3 className="">Name: {`${firstName} ${lastName}`}</h3>
          <div className="flex items-center gap-2">Email: {email}</div>
          <p className="text-sm">Phone Number: {phone}</p>
          <h3 className=" max-w-[30ch]">Address: {address}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="flex justify-between text-left items-center"
          onClick={() => setShowCarDetails((prev) => !prev)}>
          <h2 className="text-xl mb-3">Car Details</h2>
          <span>
            {!showCarDetails && <MdExpandMore />}
            {showCarDetails && <MdExpandLess />}
          </span>
        </button>
        <div className={`${showCarDetails ? "block" : "hidden"}`}>
          <h3 className="">Model: {model}</h3>
          <div className="flex items-center gap-2">Capacity: {capacity}</div>
          <p className="text-sm">Vehicle Number: {vehicleNumber}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <button
          className="flex justify-between text-left items-center"
          onClick={() => setShowRentDetails((prev) => !prev)}>
          <h2 className="text-xl mb-3">Rent Details</h2>
          <span>
            {!showRentDetails && <MdExpandMore />}
            {showRentDetails && <MdExpandLess />}
          </span>
        </button>
        <div className={`${showRentDetails ? "block" : "hidden"}`}>
          <h3>Order ID: {order_id}</h3>
          <h3>Start Date: {convertDateIST(startDate)}</h3>
          <h3>End Date: {convertDateIST(endDate)}</h3>
          <h3 className="font-semibold">Total Rent: ₹ {price}</h3>
        </div>
      </div>
      <div className="flex-1" />
      <div className="flex flex-col gap-3">
        <button className="bg-blue-500 px-2.5 py-1 rounded-md text-white font-semibold">
          Confirm
        </button>
        <button className="bg-red-500 px-2.5 py-1 rounded-md text-white font-semibold">
          Cancel
        </button>
      </div>
    </div>
  );
};
export default OrderItemMobile;
