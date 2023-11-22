import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthProvider } from "../../context/AuthContext";
import AxiosSecure from "../custom/AxiosSecure";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthProvider);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const location = useLocation();

  const handleForm = (d) => {
    if (d.password !== "leNormand") {
      return alert("Please enter the correct pass key");
    }

    login(d.email, d.password)
      .then((res) => {
        console.log(res);
        AxiosSecure()
          .post("/admins", d)
          .then((res) => {
            res.data;
            navigate(location?.state ? location?.state : "/");
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className="bg-olive-50 min-h-screen flex flex-col justify-center items-center">
        <div className="text-center mb-4">
            <h2 className="text-3xl font-semibold">Admin Panel Login</h2>
            <p className="text-red-600">
                Please remember that this is an admins-only page & only authorized
                members of the site can have access to it.
            </p>
        </div>
      <form className="w-3/4 mx-auto"
            onSubmit={handleSubmit(handleForm)}>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("email")}
            type="email"
            name="email"
            id="email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            {...register("password")}
            type="password"
            name="password"
            id="password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b border-[#607244] appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-[#607244] peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="password"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-olive-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Pass Key
          </label>
        </div>
        <button
          type="submit"
          className="text-white
            text-sm w-full sm:w-auto px-5 py-2.5 text-center smooth-bg border-[#607244] border"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
