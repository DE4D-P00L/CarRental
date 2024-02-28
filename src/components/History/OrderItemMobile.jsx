/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import carPlaceholder from "../../assets/car-placeholder.png";
import convertDateIST from "../../utils/convertDateToIST.js";

const OrderItemMobile = ({ order }) => {
  const { price, carId, startDate, endDate } = order;
  const { model, vehicleNumber, capacity, vehicleImage } = carId;
  const [showCarDetails, setShowCarDetails] = useState(false);
  const [showRentDetails, setShowRentDetails] = useState(false);

  return (
    <div className="shadow-md rounded-md bg-base-200 flex flex-col gap-3 p-4">
      <div className="max-h-[250px] p-2 flex justify-center items-center">
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
          <h3>Start Date: {convertDateIST(startDate)}</h3>
          <h3>End Date: {convertDateIST(endDate)}</h3>
          <h3 className="font-semibold">Total Rent: ₹ {price}</h3>
        </div>
      </div>
      <div className="flex-1" />
    </div>
  );
};
export default OrderItemMobile;
