import { FaUser } from "react-icons/fa";
import carPlaceholder from "../../assets/car-placeholder.png";

const OrderItem = ({ order }) => {
  const { price, carId, customerId, startDate, endDate } = order;
  const { model, vehicleNumber, capacity, vehicleImage } = carId;
  const { firstName, lastName, email, phone, address } = customerId;
  return (
    <div className="shadow-md rounded-md bg-base-200 flex gap-10 p-4">
      <div className="max-h-[250px] p-2 h-[200px]">
        <img
          src={`${
            vehicleImage === "" || !vehicleImage ? carPlaceholder : vehicleImage
          }`}
          alt={model}
          className="h-full rounded-md w-[250px] object-contain"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-3">Customer Details</h2>
        <div className="">
          <h3 className="">Name: {`${firstName} ${lastName}`}</h3>
          <div className="flex items-center gap-2">Email: {email}</div>
          <p className="text-sm">Phone Number: {phone}</p>
          <h3 className=" max-w-[30ch]">Address: {address}</h3>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-semibold mb-3">Car Details</h2>
        <div className="">
          <h3 className="">Model: {model}</h3>
          <div className="flex items-center gap-2">Capacity: {capacity}</div>
          <p className="text-sm">Vehicle Number: {vehicleNumber}</p>
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
export default OrderItem;
