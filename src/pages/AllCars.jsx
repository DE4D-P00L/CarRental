import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useGetAllAgencyCars from "../hooks/useGetAllAgencyCars";
import Item from "../components/AllCars/Item";

const AllCars = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const { loading, getCars, cars } = useGetAllAgencyCars();

  useEffect(() => {
    if (!user || !user?.isAgency) navigate("/", { replace: true });
    getCars();
  }, [navigate, user]);

  return (
    <div className="max-w-7xl mx-auto p-3">
      <div className="flex gap-3 flex-wrap justify-center">
        {!loading && cars.length === 0 && (
          <h2>No cars available on this day</h2>
        )}
        {!loading && cars?.map((car) => <Item key={car._id} car={car} />)}
      </div>
    </div>
  );
};
export default AllCars;
