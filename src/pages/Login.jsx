import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../features/authSlice";
import toast from "react-hot-toast";
import PageTransition from "../Animations/PageTransition";

const Login = () => {
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
      ? import.meta.env.VITE_BACKEND_URL + "/agency/login"
      : import.meta.env.VITE_BACKEND_URL + "/user/login";
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
    <PageTransition className="w-full h-[calc(100vh-70px)] max-h-screen flex items-center justify-center p-2 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col p-6 sm:p-8 gap-y-3 rounded-lg w-full max-w-sm bg-base-200">
        <h3 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
          Log in to your account
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
            placeholder="johnDoe@gmail.com"
          />
          {errors.username?.message && (
            <p className="text-red-500">{errors.username?.message}</p>
          )}
        </div>
        <div className="space-y-2">
          <label>Password</label>
          <input
            type="password"
            className="bg-base-200 border border-gray-500 text-content sm:text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
            {...register("password", {
              required: "Password Required",
              minLength: {
                value: 6,
                message: "Password must be atleast 6 characters long",
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
            <label>Login agency account</label>
          </div>
          {errors.isAgency?.message && (
            <p className="text-red-500">{errors.isAgency?.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#2563eb]">
          {loading && <span className="loading loading-dots loading-sm"></span>}
          {!loading && <span>Login</span>}
        </button>
        <span>
          Don’t have an account yet?{" "}
          <Link to="/register" className="text-[#2563eb]">
            {" "}
            Sign up
          </Link>
        </span>
      </form>
    </PageTransition>
  );
};
export default Login;
