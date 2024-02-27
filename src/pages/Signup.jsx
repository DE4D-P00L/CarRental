import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../features/authSlice";
import toast from "react-hot-toast";
import PageTransition from "../Animations/PageTransition";

const Signup = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/");
  }, [navigate, user]);

  const onSubmit = async (data) => {
    const reqUrl = data.isAgency
      ? import.meta.env.VITE_BACKEND_URL + "/agency/signup"
      : import.meta.env.VITE_BACKEND_URL + "/user/signup";
    try {
      setLoading(true);
      const response = await axios.post(reqUrl, data);
      toast.success("Welcome");
      localStorage.setItem("token", `Bearer ${response.data.token}`);
      dispatch(setUser(response.data.user));
      navigate("/");
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition className="w-full flex items-center justify-center p-2">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 sm:p-8 bg-base-200 gap-y-3 rounded-lg w-full max-w-[400px]">
        <h3 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Sign up for a new account
        </h3>
        <div className="mt-4 space-y-2">
          <label>Your Email</label>
          <input
            type="email"
            className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            {...register("email", {
              required: "Email Required",
              minLength: {
                value: 3,
                message: "Email must be at least 3 characters",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder="johndoe@gmail.com"
          />
          {errors.email?.message && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
        </div>
        <div className="flex gap-3">
          <div className="space-y-2">
            <label>First Name</label>
            <input
              type="text"
              className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              {...register("firstName", {
                required: "First Name Required",
                minLength: {
                  value: 3,
                  message: "First Name must be at least 3 characters",
                },
              })}
              placeholder="John"
            />
          </div>
          <div className="space-y-2">
            <label>Last Name</label>
            <input
              type="text"
              className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
              {...register("lastName")}
              placeholder="Doe"
            />
          </div>
        </div>
        {errors.firstName?.message && (
          <p className="text-red-500">{errors.firstName?.message}</p>
        )}
        {errors.lastName?.message && (
          <p className="text-red-500">{errors.lastName?.message}</p>
        )}
        <div className="space-y-2">
          <label>Phone number</label>
          <input
            type="text"
            className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            {...register("phone", {
              required: "Phone Number Required",
              minLength: {
                value: 10,
                message: "Phone Number must be at least 10 characters",
              },
              maxLength: {
                value: 10,
                message: "Phone Number must be at most 10 characters",
              },
            })}
            placeholder="9876543210"
          />
          {errors.phone?.message && (
            <p className="text-red-500">{errors.phone?.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label>Address</label>
          <input
            type="text"
            className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            {...register("address", {
              required: "Address Required",
              minLength: {
                value: 3,
                message: "Address must be at least 3 characters",
              },
            })}
            placeholder="12th street, abc town"
          />
          {errors.address?.message && (
            <p className="text-red-500">{errors.address?.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label>Password</label>
          <input
            type="password"
            className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            {...register("password", {
              required: "Password is Required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            placeholder="Password"
          />
          {errors.password?.message && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <div className="flex gap-2">
            <input
              type="checkbox"
              className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block p-2.5"
              {...register("isAgency")}
            />
            <label>Register as agency account</label>
          </div>
          {errors.isAgency?.message && (
            <p className="text-red-500">{errors.isAgency?.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#2563eb] ">
          {loading && <span className="loading loading-dots loading-sm"></span>}
          {!loading && <span>Signup</span>}
        </button>
        <span>
          Already have an account?{" "}
          <Link to="/login" className="text-[#2563eb]">
            {" "}
            Login
          </Link>
        </span>
      </form>
    </PageTransition>
  );
};
export default Signup;
