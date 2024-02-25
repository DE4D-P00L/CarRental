/* eslint-disable react/prop-types */
const OrderItem = ({ order }) => {
  const { price, carId, customerId, startDate, endDate } = order;
  const { model, vehicleNumber, capacity, vehicleImage } = carId;
  const { firstName, lastName, email, phone, address } = customerId;
  return (
    <div className="shadow-md rounded-md bg-base-200 flex gap-10 p-4">
      <div className="max-h-[250px] p-2 h-[200px]">
        <img
          src={`${
            vehicleImage === "" || !vehicleImage
              ? "https://placehold.co/600x400/png"
              : vehicleImage
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
    </div>
  );
};
export default OrderItem;
