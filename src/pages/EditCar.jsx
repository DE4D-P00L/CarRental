import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import PageTransition from "../Animations/PageTransition";
import useGetCarDetails from "../hooks/useGetCarDetails";

const EditCar = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const [model, setModel] = useState("");
  const [vehNumber, setVehNumber] = useState("");
  const [capacity, setCapacity] = useState("");
  const [rent, setRent] = useState("");
  const [features, setFeatures] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [saveInProgress, setSaveInProgress] = useState(false);
  const { loading, getCar, car } = useGetCarDetails();
  const { id } = useParams();
  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!user || !user?.isAgency) navigate("/", { replace: true });
    const preFillData = async () => {
      await getCar(id);
      setModel(car.model);
      setVehNumber(car.vehicleNumber);
      setCapacity(car.capacity);
      setRent(car.rent);
      setFeatures(car.features?.join(","));
      setIsFirstRender(false);
    };
    preFillData();
  }, [navigate, user, id, isFirstRender]);

  const handleImageSelect = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const editCarHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    if (model.trim().length > 0) formData.append("model", model);
    if (vehNumber.trim().length > 0)
      formData.append("vehicleNumber", vehNumber);
    if (capacity > 0) formData.append("capacity", capacity);
    formData.append("features", features);
    if (rent > 0) formData.append("rent", rent);
    if (selectedImage != null) formData.append("carImage", selectedImage);
    try {
      setSaveInProgress(true);
      const response = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/agency/edit-car/" + id,
        formData,
        { headers: { Authorization: localStorage.getItem("token") } }
      );
      if (response.data.success === true) {
        toast.success("Car edited successfully");
        navigate("/all-cars", { replace: true });
      } else {
        toast.error("Please try again");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setSaveInProgress(false);
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
      {!loading && (
        <div className="flex flex-col gap-3 w-[350px] bg-base-300 p-3 rounded-md">
          <h3 className="font-semibold text-2xl my-3 text-center">
            Edit {car?.model}
          </h3>
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
            onClick={editCarHandler}
            className="bg-success text-black py-2 rounded-md">
            {saveInProgress && (
              <span className="loading loading-dots loading-sm"></span>
            )}
            {!saveInProgress && <span>Save</span>}
          </button>
        </div>
      )}
    </PageTransition>
  );
};
export default EditCar;
