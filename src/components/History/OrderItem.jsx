/* eslint-disable react/prop-types */
import carPlaceholder from "../../assets/car-placeholder.png";
import convertDateIST from "../../utils/convertDateToIST.js";

const OrderItem = ({ order }) => {
  const { price, carId, startDate, endDate, order_id } = order;
  const { model, vehicleNumber, capacity, vehicleImage } = carId;
  return (
    <div className="shadow-md rounded-md bg-base-200 flex gap-10 p-4 px-10">
      <div className="max-h-[250px] p-2 flex justify-center items-center">
        <img
          src={`${
            vehicleImage === "" || !vehicleImage ? carPlaceholder : vehicleImage
          }`}
          alt={model}
          className=" rounded-md w-[250px] object-contain"
        />
      </div>
      <div className="flex flex-col my-8">
        <h2 className="text-xl font-semibold mb-3">Car Details</h2>
        <div className="">
          <h3 className="">Model: {model}</h3>
          <div className="flex items-center gap-2">Capacity: {capacity}</div>
          <p className="text-sm">Vehicle Number: {vehicleNumber}</p>
        </div>
      </div>
      <div className="flex flex-col my-8">
        <h2 className="text-xl font-semibold mb-3">Rent Details</h2>
        <div>
          <h3>Order ID: {order_id}</h3>
          <h3>Start Date: {convertDateIST(startDate)}</h3>
          <h3>End Date: {convertDateIST(endDate)}</h3>
          <h3 className="font-semibold">Total Rent: ₹ {price}</h3>
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
