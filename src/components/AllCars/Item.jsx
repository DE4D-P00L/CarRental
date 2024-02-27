import { FaUser } from "react-icons/fa";
import EditButton from "./EditButton";
import carPlaceholder from "../../assets/car-placeholder.png";

const Item = ({ car }) => {
  const { _id, capacity, features, model, rent, vehicleNumber, vehicleImage } =
    car;
  return (
    <div className="shadow-md rounded-md bg-base-200 relative">
      <div className="max-h-[250px] h-[200px] p-2 flex items-center justify-center">
        <img
          src={`${
            vehicleImage === "" || !vehicleImage ? carPlaceholder : vehicleImage
          }`}
          alt={model}
          className="rounded-md w-[250px] object-contain"
        />
      </div>
      <EditButton id={_id} />
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
        </div>
      </div>
    </div>
  );
};
export default Item;
