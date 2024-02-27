import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import PageTransition from "../Animations/PageTransition";

const AddCar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [model, setModel] = useState("");
  const [vehNumber, setVehNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rent, setRent] = useState("");
  const [features, setFeatures] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!user || !user?.isAgency) navigate("/", { replace: true });
  }, [navigate, user]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const addCarHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (
      model.trim().length === 0 ||
      vehNumber.trim().length === 0 ||
      capacity <= 0 ||
      rent <= 0
    )
      return toast.error("Please fill valid info");
    formData.append("model", model);
    formData.append("vehicleNumber", vehNumber);
    formData.append("capacity", capacity);
    formData.append("features", features);
    formData.append("rent", rent);
    formData.append("carImage", selectedImage);
    try {
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/agency/add-car",
        formData,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      if (response.data.success === true) {
        toast.success("Car added successfully");
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      console.log(error.message);
    }
    setModel("");
    setVehNumber("");
    setCapacity("");
    setRent("");
    setFeatures("");
    setSelectedImage(null);
  };
  return (
    <PageTransition className="grid place-content-center min-h-[calc(100vh-60px)]">
      <div className="flex flex-col gap-3 w-[350px] bg-base-300 p-3 rounded-md">
        <h3 className="font-semibold text-2xl my-3 text-center">Add a Car</h3>
        <input
          type="text"
          name="model"
          value={model}
          placeholder="Model"
          required
          className="px-2 py-1 w-full bg-base-200 rounded-md"
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          value={vehNumber}
          name="vehicleNumber"
          placeholder="Vehicle Number"
          required
          className="px-2 py-1 w-full bg-base-200 rounded-md"
          onChange={(e) => setVehNumber(e.target.value)}
        />
        <div className="flex gap-3">
          <input
            type="number"
            value={capacity}
            name="capacity"
            placeholder="Capacity"
            required
            className="px-2 py-1 w-full bg-base-200 rounded-md"
            onChange={(e) => setCapacity(e.target.value)}
          />
          <input
            type="number"
            value={rent}
            name="rent"
            placeholder="Rent (₹)"
            required
            className="px-2 py-1 w-full bg-base-200 rounded-md"
            onChange={(e) => setRent(e.target.value)}
          />
        </div>
        <input
          type="text"
          name="features"
          value={features}
          placeholder="Features"
          className="px-2 py-1 w-full bg-base-200 rounded-md"
          onChange={(e) => setFeatures(e.target.value)}
        />
        {/* <div className="flex justify-center items-center">
          {imageUrl && <img src={imageUrl} alt="Selected image" />}
          {selectedImage && !imageUrl && <p>Loading image...</p>}
        </div> */}
        <input type="file" onChange={handleImageSelect} />
        <button
          onClick={addCarHandler}
          className="bg-success text-black py-2 rounded-md">
          Add
        </button>
      </div>
    </PageTransition>
  );
};
export default AddCar;
