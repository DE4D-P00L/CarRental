import { FaUser } from "react-icons/fa";
import carPlaceholder from "../../assets/car-placeholder.png";
import { useSelector } from "react-redux";

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

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="shadow-md rounded-md bg-base-200 p-2">
      <div className="max-h-[250px] h-[180px] flex items-center justify-center relative group cursor-pointer">
        <img
          src={`${
            vehicleImage === "" || !vehicleImage ? carPlaceholder : vehicleImage
          }`}
          alt={model}
          className="rounded-md w-[250px] object-contain h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-base-100/70 rounded-md justify-center items-center group-hover:flex hidden">
          <div className="max-w-[250px] flex flex-col items-center gap-2">
            {features?.map((feature, idx) => (
              <span
                key={idx}
                className="border border-base-content rounded-full px-2">
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
      {/* <marquee
        className="px-2 group-hover:inline-block hidden"
        scrollamount="3">
        <p className="max-w-[250px]">{features}</p>
      </marquee> */}
      <div className="flex mt-2">
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
          {!user.isAgency && (
            <button
              className="bg-success text-white px-2.5 py-1.5 rounded-md"
              onClick={() => onRentCar(car)}>
              Rent
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default Item;
