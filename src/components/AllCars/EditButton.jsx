import { BiEdit } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const EditButton = ({ id }) => {
  const navigate = useNavigate();
  return (
    <button
      className="absolute right-3 top-3 p-1.5 text-xl bg-error rounded-md cursor-pointer text-black"
      onClick={() => navigate("/edit/" + id)}>
      <BiEdit />
    </button>
  );
};

export default EditButton;
