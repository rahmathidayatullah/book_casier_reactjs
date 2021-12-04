import React, { useState, useEffect } from "react";
import imgLogin from "../../assets/img/sign.png";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../features/authentication/actions";
export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authentication = useSelector((state) => state.authentication);
  console.log("authentication", authentication);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    clearErrors,
  } = useForm();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    clearErrors(name);
    setForm({ ...form, [name]: value });
  };

  const onSubmit = () => {
    // console.log("form", form);
    dispatch(postLogin(form));
  };

  useEffect(() => {
    if (authentication.status === "error") {
      alert("password atau email salah");
    }
    if (localStorage.getItem("token")) {
      navigate("/product");
    }
  }, [authentication.status]);

  return (
    <>
      <div className="flex items-center justify-center h-screen m-auto">
        {/* image */}
        <img className="mr-8" src={imgLogin} alt="img-login" />
        {/* form login */}
        <div
          className="px-28 py-20 shadow rounded-2xl"
          style={{ width: "710px" }}
        >
          <h1 className="font-bold text-3xl text-black">Welcome User!</h1>
          <p className="font-bold text-base">
            Codeathome <span className="font-normal">BookStore</span>{" "}
          </p>
          <p className="text-base mt-9">Please sign in first</p>

          <form className="mt-8" onSubmit={handleSubmit(onSubmit)}>
            <input
              {...register("email", {
                required: "error can't be empty",
              })}
              onChange={handleChange}
              value={form.email}
              type="email"
              name="email"
              placeholder="Email"
              className="py-4 px-6 shadow w-full focus:outline-none"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
            <input
              {...register("password", {
                required: "password can't be empty",
              })}
              onChange={handleChange}
              value={form.password}
              type="password"
              name="password"
              placeholder="Password"
              className="py-4 px-6 shadow w-full mt-5 focus:outline-none"
            />

            {errors.password && (
              <p className="text-red-500 mt-2">{errors.password.message}</p>
            )}

            <button
              type="submit"
              className="py-4 px-6 shadow w-full text-center text-white font-bold text-base bg-purple-800 rounded-2xl mt-12"
            >
              {authentication.status === "process" ? "Loading .." : "Sign in"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
