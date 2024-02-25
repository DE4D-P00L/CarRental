import { FaUser } from "react-icons/fa";

const Item = ({ car, onRentCar }) => {
  const {
    _id,
    agencyId,
    capacity,
    features,
    model,
    rent,
    vehicleNumber,
    vehicleImage,
  } = car;
  return (
    <div className="shadow-md rounded-md bg-base-200">
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
      <div className="flex p-2">
        <div className="flex-1">
          <h3 className="font-semibold text-xl">{model}</h3>
          <p className="font-thin text-sm">{vehicleNumber}</p>
          <h3 className="font-semibold">₹ {rent}/day</h3>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex items-center gap-2">
            <FaUser />
            {capacity}
          </div>
          <button
            className="bg-success text-white px-2.5 py-1.5 rounded-md"
            onClick={() => onRentCar(car)}>
            Rent
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
